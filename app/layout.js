import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Pinecone by Stanford · Money decisions, tried before you make them',
  description: 'Free, hands-on personal finance learning from Stanford. Try a decision with your own numbers. No sign-up.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap" />
      </head>
      <body>
        <header className="nav">
          <div className="nav-in">
            <Link href="/" className="brand">Pinecone <span>by Stanford</span></Link>
            <nav aria-label="Main">
              <Link href="/#questions">Questions</Link>
              <Link href="/#situations">Situations</Link>
              <Link href="/calculators">Calculators</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="foot">
          <div className="wrap">
            <p><b>Pinecone</b> is free financial education from Stanford&apos;s Initiative for Financial Decision-Making. It helps you think through money decisions. It doesn&apos;t give financial, legal, or tax advice.</p>
            <p className="tiny">Research prototype 4. <Link href="/start">See how people arrive here</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
