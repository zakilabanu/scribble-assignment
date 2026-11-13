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
        <nav className="app-shell__nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/terms-and-conditions">Terms</Link>
        </nav>
      </header>
      <main className="app-shell__main">{children}</main>
      <footer className="app-shell__footer">
        <Link to="/about-us">About Scribble</Link>
        <Link to="/terms-and-conditions">Terms and conditions</Link>
      </footer>
    </div>
  );
}
