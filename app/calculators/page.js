import CalcCard from '@/components/CalcCard';
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
          <CalcCard key={c.id} c={c} />
        ))}
      </div>
    </div>
  );
}
