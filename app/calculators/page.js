import Link from 'next/link';
import { calculators, questions } from '@/lib/content';

export const metadata = { title: 'Calculators · Pinecone by Stanford' };

export default function Calculators() {
  return (
    <div className="wrap">
      <div className="qhead narrow" style={{ paddingTop: 40 }}>
        <h1>Calculators</h1>
        <p className="muted" style={{ fontSize: 20 }}>Precise numbers when you need them. Each one also sits on the question pages where it helps most.</p>
      </div>
      <div className="grid" style={{ paddingBottom: 24 }}>
        {calculators.map((c) => (
          <div key={c.id} className="module" style={{ transform: 'none', padding: 24, gap: 10 }}>
            <h3>{c.name}</h3>
            <p className="muted">{c.does}</p>
            {c.usedIn.length > 0 && (
              <p className="tiny">Appears on: {c.usedIn.map((s, i) => <span key={s}>{i ? ', ' : ''}<Link href={`/q/${s}`}>{questions[s].short}</Link></span>)}</p>
            )}
            <a className="go" href={c.url} target="_blank" rel="noreferrer">Open →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
