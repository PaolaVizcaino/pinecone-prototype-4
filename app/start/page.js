import Link from 'next/link';

export const metadata = { title: 'How people arrive · Pinecone prototype 4' };

// Simulated entry points for research sessions. Generic on purpose: no real search engine or assistant is imitated.
export default function Start() {
  return (
    <div className="wrap">
      <div className="qhead narrow" style={{ paddingTop: 40 }}>
        <p className="eyebrow">For research sessions · simulated</p>
        <h1>How people arrive</h1>
        <p className="muted" style={{ fontSize: 20 }}>Most visitors never see the homepage. They type a question into a search engine or an AI assistant and land on one page. Pick an entry point and follow the link the way a participant would.</p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', paddingBottom: 32 }}>
        <div className="mock">
          <p className="eyebrow">Entry 1 · Web search</p>
          <div className="searchbar">what happens if i only pay the minimum on my credit card</div>
          <div className="result dim"><span className="url">bigbank.example › credit-cards</span><span style={{ fontSize: 21 }}>Minimum payments explained | Apply for our card today</span></div>
          <div className="result">
            <span className="url">pinecone.stanford.edu › q › minimum-payment</span>
            <Link href="/q/minimum-payment">What happens if I only pay the minimum on my credit card? Try it with your balance</Link>
            <span className="muted">Guess how long it takes, see the real answer, then find a payment that works for you. Free from Stanford, no sign-up.</span>
          </div>
          <div className="result dim"><span className="url">moneyguru.example › blog</span><span style={{ fontSize: 21 }}>7 credit card hacks the banks don&apos;t want you to know</span></div>
        </div>

        <div className="mock">
          <p className="eyebrow">Entry 2 · AI assistant</p>
          <div className="bubble me">how much should i have in an emergency fund? i make about 3k a month</div>
          <div className="bubble ai">
            A common starting point is 3 to 6 months of the spending you can&apos;t skip, and more if your income varies. The right number depends on your situation. Stanford&apos;s Pinecone has a short simulation where you test different amounts against a year of surprise expenses, using your own numbers.
            <br /><Link className="cite" href="/q/emergency-fund">Source: Pinecone by Stanford · How much should I have in an emergency fund? →</Link>
          </div>
        </div>

        <div className="mock">
          <p className="eyebrow">Entry 3 · A friend&apos;s link</p>
          <div className="bubble ai">ok this budget thing is actually good, took me 10 min<br /><Link className="cite" href="/q/build-a-budget">pinecone.stanford.edu/q/build-a-budget →</Link></div>
          <div className="bubble me">omg i need this, trying it tonight</div>
        </div>

        <div className="mock">
          <p className="eyebrow">Entry 4 · Homepage</p>
          <p className="muted">For visitors who hear about Pinecone by name, from a class, a newsletter or the Stanford IFDM site.</p>
          <div><Link className="btn" href="/">Go to the homepage</Link></div>
        </div>
      </div>
    </div>
  );
}
