'use client';
import { useState } from 'react';

// One knowledge check question. Apply, not recall; feedback explains the thinking.
export function QuickCheck({ check }) {
  const [picked, setPicked] = useState(null);
  return (
    <section className="block" aria-labelledby="qc-title">
      <div className="checkcard">
        <p className="eyebrow">Quick check</p>
        <h2 id="qc-title">{check.q}</h2>
        <div className="opts">
          {check.options.map((o, i) => {
            const cls = picked === null ? 'opt' : i === check.answer ? 'opt right' : i === picked ? 'opt wrong' : 'opt';
            return <button key={o} type="button" className={cls} disabled={picked !== null} onClick={() => setPicked(i)}>{o}</button>;
          })}
        </div>
        {picked !== null && (
          <p className="checkfb"><b>{picked === check.answer ? 'Yes. ' : 'Not quite. '}</b>{check.why}</p>
        )}
      </div>
    </section>
  );
}

// 1 to 5 confidence tap. Research signal for hypothesis 3.
export function Confidence({ question }) {
  const [v, setV] = useState(null);
  return (
    <section className="block" aria-labelledby="cf-title">
      <div className="checkcard checkcard--soft">
        <h2 id="cf-title">{question}</h2>
        <div className="tap">
          {[1, 2, 3, 4, 5].map((n) => <button key={n} type="button" aria-pressed={v === n} onClick={() => setV(n)}>{n}</button>)}
        </div>
        <div className="tapnote"><span>Not sure</span><span>Very sure</span></div>
        {v !== null && <p className="checkfb">Thanks. {v >= 4 ? 'Sounds like the tryout helped.' : 'Try the game again with different numbers, or read the idea behind it.'}</p>}
      </div>
    </section>
  );
}
