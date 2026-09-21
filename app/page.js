import Link from 'next/link';
import HomeTop from '@/components/HomeTop';
import CalcCard from '@/components/CalcCard';
import { situations, calculators } from '@/lib/content';

export default function Home() {
  return (
    <>
      <HomeTop />

      <div className="wrap">
        <section className="block" id="situations">
          <div className="sechead"><h2>Or find your situation</h2></div>
          <div className="sitgrid">
            {situations.map((s) => {
              return (
                <Link key={s.slug} href={`/situations/${s.slug}`} className="sitcard" style={{ '--c': s.hex }}>
                  <span className="tag tag--topic">{s.topic}</span>
                  <h3>{s.name}</h3>
                  <p>{s.blurb}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="block">
          <div className="sechead">
            <h2>Calculators</h2>
            <Link className="linkbtn" href="/calculators">All calculators →</Link>
          </div>
          <div className="sitgrid">
            {calculators.slice(0, 5).map((c) => (
              <CalcCard key={c.id} c={c} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
