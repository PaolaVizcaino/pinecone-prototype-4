import Link from 'next/link';
import { notFound } from 'next/navigation';
import QuestionCard from '@/components/QuestionCard';
import { situations, calculators, questions } from '@/lib/content';

export function generateStaticParams() {
  return situations.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }) {
  const s = situations.find((x) => x.slug === params.slug);
  return s ? { title: `${s.name} · Pinecone by Stanford`, description: s.blurb } : {};
}

// Same building blocks as the home page: question cards, then small tiles.
export default function SituationPage({ params }) {
  const s = situations.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const live = s.qs.filter(([, slug]) => slug);
  const soon = s.qs.filter(([, slug]) => !slug);
  const calcs = calculators.filter((c) => s.calcs.includes(c.id));
  const others = situations.filter((x) => x.slug !== s.slug).slice(0, 5);
  return (
    <div className="wrap">
      <p className="crumbs"><Link href="/">Home</Link> / <Link href="/#situations">Situations</Link></p>
      <div className="qhead narrow">
        <span className="tag tag--topic" style={{ '--c': s.hex, alignSelf: 'flex-start' }}>{s.topic}</span>
        <h1>{s.name}</h1>
        <p className="muted" style={{ fontSize: 20 }}>{s.blurb}</p>
      </div>

      {live.length > 0 && (
        <section className="block">
          <div className="sechead"><h2>Try it with your own numbers</h2></div>
          <div className="modules">
            {live.map(([, slug]) => <QuestionCard key={slug} slug={slug} q={questions[slug]} />)}
          </div>
        </section>
      )}

      {soon.length > 0 && (
        <section className="block">
          <div className="sechead"><h2>{live.length ? 'More questions, coming soon' : 'Questions coming soon'}</h2></div>
          <div className="modules">
            {soon.map(([text]) => (
              <div key={text} className="module module--soon" style={{ '--c': s.hex }} aria-disabled="true">
                <div className="module__body">
                  <div className="module__tags">
                    <span className="tag tag--topic">{s.topic}</span>
                    <span className="popular">Coming soon</span>
                  </div>
                  <h3>{text}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {calcs.length > 0 && (
        <section className="block">
          <div className="sechead"><h2>Calculators for this situation</h2></div>
          <div className="sitgrid">
            {calcs.map((c) => (
              <a key={c.id} className="sitcard" href={c.url} target="_blank" rel="noreferrer">
                <span className="tag">Calculator</span>
                <h3>{c.name}</h3>
                <p>{c.does}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="block">
        <div className="sechead">
          <h2>Other situations</h2>
          <Link className="linkbtn" href="/#situations">See all →</Link>
        </div>
        <div className="sitgrid">
          {others.map((o) => (
            <Link key={o.slug} href={`/situations/${o.slug}`} className="sitcard" style={{ '--c': o.hex }}>
              <span className="tag tag--topic">{o.topic}</span>
              <h3>{o.name}</h3>
              <p>{o.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
