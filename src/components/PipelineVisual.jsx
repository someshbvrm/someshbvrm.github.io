/**
 * Decorative medallion-pipeline illustration for the hero.
 * Purely visual (aria-hidden); it carries no resume content.
 */
const stages = [
  { key: 'src', label: 'Sources', sub: 'SQL · APIs · Files', tone: 'slate' },
  { key: 'brz', label: 'Bronze', sub: 'Raw Delta', tone: 'bronze' },
  { key: 'slv', label: 'Silver', sub: 'Cleansed', tone: 'silver' },
  { key: 'gld', label: 'Gold', sub: 'Star schema', tone: 'gold' },
];

export default function PipelineVisual() {
  return (
    <div className="pipeline" aria-hidden="true">
      <div className="pipeline-head">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="pipeline-title">lakehouse_pipeline.run()</span>
      </div>
      <div className="pipeline-body">
        {stages.map((s, i) => (
          <div className="pipeline-row" key={s.key} style={{ '--i': i }}>
            <span className={`stage stage-${s.tone}`}>
              <span className="stage-label">{s.label}</span>
              <span className="stage-sub">{s.sub}</span>
            </span>
            {i < stages.length - 1 ? (
              <span className="flow">
                <span className="flow-packet" />
              </span>
            ) : (
              <span className="stage-done">✓ served</span>
            )}
          </div>
        ))}
        <div className="pipeline-log">
          <span className="log-key">status</span> <span className="log-ok">Succeeded</span>
          <span className="log-sep">·</span>
          <span className="log-key">mode</span> incremental
        </div>
      </div>
    </div>
  );
}
