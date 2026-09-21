import Link from 'next/link';
import { notFound } from 'next/navigation';
import GameFrame from '@/components/GameFrame';
import { questions, situations, calculators } from '@/lib/content';

export function generateStaticParams() {
  return Object.keys(questions).map((slug) => ({ slug }));
}
export function generateMetadata({ params }) {
  const q = questions[params.slug];
  return q ? { title: `${q.title} · Pinecone by Stanford`, description: q.blurb } : {};
}

export default function QuestionPage({ params }) {
  const q = questions[params.slug];
  if (!q) notFound();
  const sit = situations.find((s) => s.slug === q.situation);
  const calc = calculators.find((c) => c.id === q.calc.id);
  return (
    <div className="wrap">
      <p className="crumbs"><Link href="/">Home</Link> / <Link href={`/situations/${sit.slug}`}>{sit.name}</Link></p>
      <div className="qhead narrow">
        <h1>{q.title}</h1>
        <p className="muted" style={{ fontSize: 20 }}>{q.blurb} About {q.minutes} minutes.</p>
      </div>

      <GameFrame game={q.game} />

      <section className="block">
        <h2>The short version</h2>
        <div className="ideas">
          {q.ideas.map(([h, p]) => <div key={h}><h3>{h}</h3><p className="muted">{p}</p></div>)}
        </div>
      </section>

      <section className="block narrow">
        <h2>Before you decide, ask yourself</h2>
        <ol className="ask">{q.ask.map((a) => <li key={a}>{a}</li>)}</ol>
      </section>

      <section className="block">
        <div className="calc">
          <p className="eyebrow">Calculator</p>
          <h3>{calc.name}</h3>
          <p className="muted">{q.calc.why}</p>
          {calc.embed ? (
            <details>
              <summary>Open the calculator here</summary>
              <iframe src={calc.url} title={calc.name} loading="lazy" />
            </details>
          ) : (
            <div><a className="btn ghost" href={calc.url} target="_blank" rel="noreferrer">Open the {calc.name.toLowerCase()}</a></div>
          )}
        </div>
      </section>

      <section className="block narrow">
        <h2>Where to next</h2>
        <ul className="list">
          {q.related.map((slug) => <li key={slug}><Link href={`/q/${slug}`}>{questions[slug].title}<span aria-hidden="true">→</span></Link></li>)}
          <li><Link href={`/situations/${sit.slug}`}>More on: {sit.name}<span aria-hidden="true">→</span></Link></li>
        </ul>
      </section>
    </div>
  );
}
