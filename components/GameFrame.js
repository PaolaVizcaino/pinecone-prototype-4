'use client';
import { useEffect, useRef, useState } from 'react';

// Embeds a game. Local games report their height so the page never double-scrolls.
export default function GameFrame({ game }) {
  const ref = useRef(null);
  const [h, setH] = useState(game.kind === 'local' ? 640 : 900);
  useEffect(() => {
    if (game.kind !== 'local') return;
    const on = (e) => {
      if (ref.current && e.source === ref.current.contentWindow && e.data && e.data.pineconeHeight) {
        setH(Math.max(420, Math.ceil(e.data.pineconeHeight) + 8));
      }
    };
    window.addEventListener('message', on);
    return () => window.removeEventListener('message', on);
  }, [game.kind]);
  return (
    <div className="frame" id="try">
      <div className="frame-top">
        <b>Try it: {game.name}</b>
        <a href={game.src} target="_blank" rel="noreferrer">Open full screen</a>
      </div>
      <iframe ref={ref} src={game.src} title={game.name} style={{ height: h }} loading="eager" />
    </div>
  );
}
