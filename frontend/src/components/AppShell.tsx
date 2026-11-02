import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div>
          <p className="app-shell__eyebrow">Multiplayer Game</p>
          <p className="app-shell__title">Scribble</p>
          <p className="app-shell__lede">
            A real-time multiplayer drawing and guessing game.
          </p>
        </div>
      </header>
      <aside className="app-banner" aria-label="Play Scribble">
        <span className="app-banner__message">
          Ready to play? Gather your friends for a drawing game.
        </span>
        <Link className="app-banner__link" to="/create-room">
          Create a room
        </Link>
      </aside>
      <main className="app-shell__main">{children}</main>
      <footer className="app-shell__footer">
        <Link to="/about-us">About us</Link>
        <Link to="/terms-and-conditions">Terms and conditions</Link>
      </footer>
    </div>
  );
}
