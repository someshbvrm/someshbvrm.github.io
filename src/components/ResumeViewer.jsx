import { useCallback, useEffect, useRef, useState } from 'react';
import { resumeUrl } from '../utils/resume.js';
import './ResumeViewer.css';

/**
 * RESUME VIEWER — shows the resume PDF in a pop-up on the page (no download button).
 *
 * The PDF in /public is drawn onto canvases with PDF.js, which is loaded from a CDN
 * the first time the viewer opens. Any link or button can open it:
 *   <a href={resumeUrl} onClick={openResume}>View Resume</a>
 * (The href is a fallback: if JavaScript fails, the link still opens the PDF.)
 */

const PDFJS_BASE = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/';
const OPEN_EVENT = 'resume-viewer:open';
const MIN_SCALE = 0.4;
const MAX_SCALE = 3;

export function openResume(event) {
  if (event) event.preventDefault();
  window.dispatchEvent(new Event(OPEN_EVENT));
}

let pdfjsPromise = null;
function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = import(/* @vite-ignore */ PDFJS_BASE + 'pdf.min.mjs')
      .then((lib) => {
        lib.GlobalWorkerOptions.workerSrc = PDFJS_BASE + 'pdf.worker.min.mjs';
        return lib;
      })
      .catch((err) => {
        pdfjsPromise = null;
        throw err;
      });
  }
  return pdfjsPromise;
}

const clamp = (value) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

function Svg({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function ResumeViewer() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [doc, setDoc] = useState(null);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [maximized, setMaximized] = useState(false);
  const scrollRef = useRef(null);
  const pagesRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocusRef = useRef(null);
  const pageWidthRef = useRef(0);

  // Zoom level that makes a page fill the viewer's width
  const fitScale = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !pageWidthRef.current) return 1;
    return clamp((el.clientWidth - 32) / pageWidthRef.current);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setMaximized(false);
    const last = lastFocusRef.current;
    if (last && typeof last.focus === 'function') last.focus();
  }, []);

  // Listen for openResume() calls from any button
  useEffect(() => {
    const onOpen = () => {
      lastFocusRef.current = document.activeElement;
      setPage(1);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  // While open: lock page scroll, close on Escape, focus the close button
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  // Load the PDF the first time the viewer opens
  useEffect(() => {
    if (!open || doc) return undefined;
    let cancelled = false;
    setStatus('loading');
    loadPdfjs()
      .then((lib) => lib.getDocument(resumeUrl).promise)
      .then((pdf) => pdf.getPage(1).then((first) => ({ pdf, first })))
      .then(({ pdf, first }) => {
        if (cancelled) return;
        pageWidthRef.current = first.getViewport({ scale: 1 }).width;
        setScale(fitScale());
        setDoc(pdf);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [open, doc, fitScale]);

  // Fit to width when reopened or when full screen is toggled
  useEffect(() => {
    if (open && pageWidthRef.current) setScale(fitScale());
  }, [open, maximized, fitScale]);

  // Draw every page onto a canvas at the current zoom
  useEffect(() => {
    const container = pagesRef.current;
    if (!open || !doc || !container) return undefined;
    let cancelled = false;
    const tasks = [];
    const dpr = window.devicePixelRatio || 1;
    container.replaceChildren();

    (async () => {
      for (let n = 1; n <= doc.numPages; n += 1) {
        if (cancelled) return;
        const pdfPage = await doc.getPage(n);
        if (cancelled) return;
        const viewport = pdfPage.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.className = 'rv-page';
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = Math.floor(viewport.width) + 'px';
        canvas.style.height = Math.floor(viewport.height) + 'px';
        canvas.dataset.page = String(n);
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', 'Resume page ' + n);
        container.appendChild(canvas);
        const task = pdfPage.render({
          canvasContext: canvas.getContext('2d'),
          viewport,
          transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
        });
        tasks.push(task);
        try {
          await task.promise;
        } catch {
          return;
        }
      }
    })();

    return () => {
      cancelled = true;
      tasks.forEach((task) => task.cancel());
    };
  }, [open, doc, scale]);

  // Update "Page x / y" while scrolling
  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const line = el.scrollTop + el.clientHeight / 3;
    let current = 1;
    el.querySelectorAll('.rv-page').forEach((canvas) => {
      if (canvas.offsetTop <= line) current = Number(canvas.dataset.page);
    });
    setPage(current);
  };

  if (!open) return null;

  const zoom = (factor) => setScale((s) => clamp(Math.round(s * factor * 100) / 100));
  const numPages = doc ? doc.numPages : 0;
  const fullLabel = maximized ? 'Exit full screen' : 'Full screen';

  return (
    <div
      className={'rv-backdrop' + (maximized ? ' is-max' : '')}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="rv-modal" role="dialog" aria-modal="true" aria-labelledby="rv-title">
        <header className="rv-head">
          <div className="rv-title">
            <h2 id="rv-title">Resume</h2>
            {numPages > 0 && (
              <span className="rv-count">
                Page {page} / {numPages}
              </span>
            )}
          </div>
          <div className="rv-head-actions">
            <button
              type="button"
              className="rv-icon-btn"
              onClick={() => setMaximized((m) => !m)}
              aria-label={fullLabel}
              title={fullLabel}
            >
              <Svg>
                {maximized ? (
                  <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
                ) : (
                  <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                )}
              </Svg>
            </button>
            <button
              ref={closeRef}
              type="button"
              className="rv-icon-btn"
              onClick={close}
              aria-label="Close resume"
              title="Close"
            >
              <Svg>
                <path d="M18 6 6 18M6 6l12 12" />
              </Svg>
            </button>
          </div>
        </header>

        <div
          className="rv-scroll"
          ref={scrollRef}
          onScroll={onScroll}
          onContextMenu={(e) => e.preventDefault()}
        >
          {status === 'loading' && <p className="rv-status">Loading resume…</p>}
          {status === 'error' && (
            <p className="rv-status">Sorry, the resume couldn&apos;t be loaded. Please try again.</p>
          )}
          <div className="rv-pages" ref={pagesRef} />
        </div>

        {status === 'ready' && (
          <div className="rv-toolbar" role="toolbar" aria-label="Zoom">
            <button
              type="button"
              className="rv-icon-btn"
              onClick={() => zoom(1 / 1.2)}
              disabled={scale <= MIN_SCALE}
              aria-label="Zoom out"
              title="Zoom out"
            >
              <Svg>
                <path d="M5 12h14" />
              </Svg>
            </button>
            <span className="rv-zoom" aria-live="polite">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              className="rv-icon-btn"
              onClick={() => zoom(1.2)}
              disabled={scale >= MAX_SCALE}
              aria-label="Zoom in"
              title="Zoom in"
            >
              <Svg>
                <path d="M12 5v14M5 12h14" />
              </Svg>
            </button>
            <span className="rv-divider" aria-hidden="true" />
            <button
              type="button"
              className="rv-icon-btn"
              onClick={() => setScale(fitScale())}
              aria-label="Fit to width"
              title="Fit to width"
            >
              <Svg>
                <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />
              </Svg>
            </button>
            <button
              type="button"
              className="rv-icon-btn"
              onClick={() => setScale(1)}
              aria-label="Actual size"
              title="Actual size (100%)"
            >
              <Svg>
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                <path d="M3 3v5h5" />
              </Svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
