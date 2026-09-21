import Link from 'next/link';
import { questions, situations, featured, calculators } from '@/lib/content';

export default function Home() {
  return (
    <>
      <div className="heroband">
        <div className="wrap hero">
          <p className="eyebrow">Free from Stanford · No sign-up</p>
          <h1>We won&apos;t tell you what to do with your money. We&apos;ll help you figure it out.</h1>
          <p className="lead">Pick the question on your mind. Try it with your own numbers in about 5 minutes. Leave knowing how to think it through.</p>
          <ul className="trust"><li>Nothing to sell</li><li>No advice, no gurus</li><li>Built on Stanford research</li></ul>
        </div>
      </div>

      <div className="wrap featured" id="questions">
        <h2>Start with what&apos;s on your mind</h2>
        <div className="grid">
          {featured.map((slug, i) => {
            const q = questions[slug];
            const accent = ['var(--sun)', 'var(--plum)', 'var(--sky)', 'var(--moss)'][i % 4];
            return (
              <Link key={slug} href={`/q/${slug}`} className="qcard" style={{ '--accent': accent }}>
                <span className="tag">Try it · {q.minutes} min</span>
                <h3>{q.title}</h3>
                <p className="muted">{q.blurb}</p>
                <span className="go">Start →</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <section className="block">
            <h2>How it works</h2>
            <div className="steps">
              <div><h3>Try it first</h3><p className="muted">Every page opens with something to do: a guess, a game, a budget to build. Use your own numbers or borrow a character&apos;s.</p></div>
              <div><h3>See the why</h3><p className="muted">A short explanation of what you just saw, in plain words.</p></div>
              <div><h3>Run exact numbers</h3><p className="muted">A Stanford calculator sits right on the page when you want precise figures.</p></div>
              <div><h3>Leave with questions to ask</h3><p className="muted">The few questions an expert would ask before deciding. They work long after you close the tab.</p></div>
            </div>
          </section>
        </div>
      </div>

      <div className="wrap">
        <section className="block" id="situations">
          <h2>Or find your situation</h2>
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
          <h2>Calculators</h2>
          <p className="muted narrow">Already know what you need to compute? Go straight to the tool. Each calculator also appears on the question pages where it helps.</p>
          <div className="row">
            {calculators.slice(0, 4).map((c) => <Link key={c.id} href="/calculators" className="btn ghost">{c.name}</Link>)}
            <Link href="/calculators" className="btn">All calculators</Link>
          </div>
        </section>

        <section className="block">
          <h2>Want the full course?</h2>
          <p className="muted narrow">Everything here comes from Pinecone&apos;s five-module personal finance course, with stories, videos and podcasts. Each question page points to the lesson behind it.</p>
        </section>
      </div>
    </>
  );
}
