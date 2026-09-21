import { crew } from '@/lib/content';

function intro(who) {
  const names = who.split(/ and |, /).map((n) => n.trim()).filter((n) => crew[n]);
  if (!names.length) return null;
  const parts = names.map((n) => `${n} ${crew[n].job}: ${crew[n].trait}`);
  return `${names.length > 1 ? 'Two' : 'One'} of the five people whose money stories run through Pinecone. ${parts.join('. ')}.`;
}

// The theory behind each game. Sits beside the game on wide screens, below it on phones.
export default function LearnPanel({ learn }) {
  const who = intro(learn.example.who);
  return (
    <aside className="learn" id="learn" aria-labelledby="learn-title">
      <p className="eyebrow">Learn</p>
      <h2 id="learn-title">The idea behind it</h2>

      <details open>
        <summary>How it works</summary>
        <div className="learn__body">{learn.idea.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
      </details>

      <details>
        <summary>A story: {learn.example.title}</summary>
        <div className="learn__body">
          {who && <p className="learn__who">Meet {learn.example.who}</p>}
          {who && <p>{who}</p>}
          <p>{learn.example.text}</p>
        </div>
      </details>

      <details>
        <summary>Words to know</summary>
        <dl className="learn__body learn__terms">
          {learn.terms.map(([t, d]) => (<div key={t}><dt>{t}</dt><dd>{d}</dd></div>))}
        </dl>
      </details>

      <details>
        <summary>Common mix-ups</summary>
        <div className="learn__body learn__mix">
          {learn.mixups.map(([m, t]) => (<div key={m}><p className="learn__myth">{m}</p><p>{t}</p></div>))}
        </div>
      </details>
    </aside>
  );
}
