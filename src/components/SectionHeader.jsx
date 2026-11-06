import Reveal from './Reveal.jsx';

/** Reusable section heading: small numbered eyebrow, title and optional lead text. */
export default function SectionHeader({ index, eyebrow, title, lead, id }) {
  return (
    <Reveal className="section-header">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </Reveal>
  );
}
