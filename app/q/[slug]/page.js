import Link from 'next/link';
import { notFound } from 'next/navigation';
import GameFrame from '@/components/GameFrame';
import LearnPanel from '@/components/LearnPanel';
import QuestionCard from '@/components/QuestionCard';
import { QuickCheck, Confidence } from '@/components/CheckIn';
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

      <a className="learnjump" href="#learn">New to this? Read the idea behind it</a>
      <div className={q.game.wide ? "qgrid qgrid--wide" : "qgrid"}>
        <GameFrame game={q.game} />
        <LearnPanel learn={q.learn} />
      </div>

      <QuickCheck check={q.check} />

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

      <Confidence question={q.confidence} />

      <section className="block">
        <div className="sechead">
          <h2>Where to next</h2>
          <Link className="linkbtn" href={`/situations/${sit.slug}`}>More on: {sit.name} →</Link>
        </div>
        <div className="modules">
          {q.related.map((slug) => <QuestionCard key={slug} slug={slug} q={questions[slug]} />)}
        </div>
      </section>
    </div>
  );
}
