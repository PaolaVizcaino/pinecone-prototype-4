import { calculators } from '@/lib/content';

export const metadata = { title: 'Calculators · Pinecone by Stanford' };

export default function Calculators() {
  return (
    <div className="wrap">
      <div className="qhead narrow" style={{ paddingTop: 40 }}>
        <h1>Calculators</h1>
        <p className="muted" style={{ fontSize: 20 }}>Precise numbers when you need them. Each one also sits on the question pages where it helps most.</p>
      </div>
      <div className="sitgrid" style={{ paddingBottom: 24 }}>
        {calculators.map((c) => (
          <a key={c.id} className="sitcard" href={c.url} target="_blank" rel="noreferrer">
            <span className="tag">Calculator</span>
            <h3>{c.name}</h3>
            <p>{c.does}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
