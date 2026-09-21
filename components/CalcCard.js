import Link from 'next/link';

const ICONS = {
  savings: <path d="M4 12a8 8 0 0116 0v3a3 3 0 01-3 3H7a3 3 0 01-3-3v-3zM12 4v3M9 13h6" />,
  'debt-payoff': <path d="M4 6h16v12H4zM4 10h16M8 15h3" />,
  interest: <path d="M4 18L10 12l4 4 6-8M4 6v12h16" />,
  tvm: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2" />,
  'present-value': <path d="M3 12h18M12 3v18M7 7l10 10M17 7L7 17" />,
  mortgage: <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" />,
  refi: <path d="M4 12a8 8 0 0114-5M20 12a8 8 0 01-14 5M18 3v4h-4M6 21v-4h4" />,
};

// Teal tile with a line icon. Same shape as the situation tiles, different color so it reads as a tool.
export default function CalcCard({ c }) {
  return (
    <a className="calccard" href={c.url} target="_blank" rel="noreferrer">
      <span className="calccard__icon" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.id] || ICONS.tvm}</svg>
      </span>
      <h3>{c.name.replace(' calculator', '')}</h3>
      <p>{c.does}</p>
    </a>
  );
}
