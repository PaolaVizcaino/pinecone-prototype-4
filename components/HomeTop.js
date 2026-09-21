'use client';
import { useState } from 'react';
import Link from 'next/link';
import QuestionCard from './QuestionCard';
import { questions, featured, searchQuestions } from '@/lib/content';

const EXAMPLES = ['I want to buy my first car', 'credit card debt', 'how much should I save', 'make a budget'];

export default function HomeTop() {
  const [q, setQ] = useState('');
  const [asked, setAsked] = useState('');
  const result = asked ? searchQuestions(asked) : null;
  const submit = (e) => { e.preventDefault(); setAsked(q.trim()); };
  const clear = () => { setQ(''); setAsked(''); };
  const ask = (text) => { setQ(text); setAsked(text); };

  return (
    <>
      <section className="heroband" aria-labelledby="hero-title">
        <div className="wrap hero">
          <h1 id="hero-title">We won&apos;t tell you what to do with your money. We&apos;ll help you figure it out.</h1>
          <p className="lead">Type the question on your mind, or pick one below. Try it with your own numbers in about 5 minutes.</p>
          <form className="qbar" onSubmit={submit} role="search">
            <label className="sr-only" htmlFor="qbar-input">Type your money question</label>
            <svg className="qbar__ico" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
            <input id="qbar-input" type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. How much should I have saved for emergencies?" autoComplete="off" />
            {asked && <button type="button" className="qbar__clear" onClick={clear} aria-label="Clear">×</button>}
            <button type="submit" className="qbar__go">Search</button>
          </form>
          <div className="tries">
            <span>Try:</span>
            {EXAMPLES.map((t) => <button key={t} type="button" onClick={() => ask(t)}>{t}</button>)}
          </div>
        </div>
      </section>

      <div className="wrap">
        {result ? (
          <section className="block" aria-live="polite">
            <div className="sechead">
              <div>
                <h2>{result.live.length ? 'Pages that fit your question' : 'We don\u2019t have that one yet'}</h2>
                <p className="muted">{result.live.length ? `For \u201c${asked}\u201d` : `Nothing ready to try for \u201c${asked}\u201d. Here is where to start instead.`}</p>
              </div>
              <button type="button" className="linkbtn" onClick={clear}>Back to all questions</button>
            </div>
            <div className="modules">
              {(result.live.length ? result.live.map((r) => r.slug) : featured.slice(0, 3)).map((slug) => <QuestionCard key={slug} slug={slug} q={questions[slug]} />)}
            </div>
            {result.soon.length > 0 && (
              <div className="narrow" style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 17 }}>Related questions, coming soon</h3>
                <ul className="list">
                  {result.soon.map((r) => (
                    <li key={r.title}><Link href={`/situations/${r.situation.slug}`} style={{ fontSize: 17 }}>{r.title}<span className="tag soon">{r.situation.name}</span></Link></li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ) : (
          <section className="block" id="questions">
            <div className="sechead"><h2>Start with what&apos;s on your mind</h2></div>
            <div className="modules modules--4">
              {featured.map((slug) => <QuestionCard key={slug} slug={slug} q={questions[slug]} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
