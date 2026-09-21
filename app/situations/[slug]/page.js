import Link from 'next/link';
import { notFound } from 'next/navigation';
import { situations, calculators } from '@/lib/content';

export function generateStaticParams() {
  return situations.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }) {
  const s = situations.find((x) => x.slug === params.slug);
  return s ? { title: `${s.name} · Pinecone by Stanford`, description: s.blurb } : {};
}

export default function SituationPage({ params }) {
  const s = situations.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const calcs = calculators.filter((c) => s.calcs.includes(c.id));
  return (
    <div className="wrap">
      <p className="crumbs"><Link href="/">Home</Link> / Situations</p>
      <div className="qhead narrow">
        <p className="eyebrow">Situation</p>
        <h1>{s.name}</h1>
        <p className="muted" style={{ fontSize: 20 }}>{s.blurb}</p>
      </div>
      <section className="block narrow">
        <h2>Questions people ask</h2>
        <ul className="list">
          {s.qs.map(([text, slug]) => (
            <li key={text}>
              {slug
                ? <Link href={`/q/${slug}`}>{text}<span className="tag">Try it</span></Link>
                : <span className="item">{text}<span className="tag soon">Coming soon</span></span>}
            </li>
          ))}
        </ul>
      </section>
      {calcs.length > 0 && (
        <section className="block narrow">
          <h2>Calculators for this situation</h2>
          <div className="row">{calcs.map((c) => <a key={c.id} className="btn ghost" href={c.url} target="_blank" rel="noreferrer">{c.name}</a>)}</div>
        </section>
      )}
    </div>
  );
}
