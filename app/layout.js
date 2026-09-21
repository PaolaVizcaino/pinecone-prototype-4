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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="nav">
          <div className="nav-in">
            <Link href="/" className="brand" aria-label="Pinecone by Stanford, home"><img src="/logo.png" alt="Pinecone by Stanford" width={150} height={46} /></Link>
            <nav aria-label="Site">
              <a href="#">Video Portal</a>
              <a href="#">Podcast</a>
              <Link href="/calculators">Calculators</Link>
              <a href="https://ifdm.stanford.edu" target="_blank" rel="noreferrer">Stanford IFDM</a>
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
