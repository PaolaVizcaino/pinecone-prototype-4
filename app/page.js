import Link from 'next/link';
import HomeTop from '@/components/HomeTop';
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
              const live = s.qs.filter((q) => q[1]).length;
              return (
                <Link key={s.slug} href={`/situations/${s.slug}`} className="sit">
                  <h3>{s.name}</h3>
                  <p className="muted">{s.blurb}</p>
                  <p className="tiny">{s.qs.length} questions{live ? ` · ${live} ready to try` : ''}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="block">
          <div className="sechead"><h2>Calculators</h2></div>
          <p className="muted narrow">Already know what you need to compute? Go straight to the tool. Each calculator also appears on the question pages where it helps.</p>
          <div className="row">
            {calculators.slice(0, 4).map((c) => <Link key={c.id} href="/calculators" className="btn ghost">{c.name}</Link>)}
            <Link href="/calculators" className="btn">All calculators</Link>
          </div>
        </section>
      </div>
    </>
  );
}
