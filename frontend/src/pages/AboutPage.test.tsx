import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";
import { AboutPage } from "./AboutPage";

describe("AboutPage", () => {
  it("renders the about-us page with an explanation of Scribble", () => {
    const markup = renderToStaticMarkup(<AboutPage />);

    expect(markup).toContain("About Scribble");
    expect(markup).toContain("Draw, guess, and have fun together");
    expect(markup).toContain("How it works");
    expect(markup).toContain("Create a room");
  });

  it("serves the page at /about-us and exposes a footer link to it", () => {
    window.history.replaceState({}, "", "/about-us");
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => root.render(<AppRoutes />));

    const aboutLink = container.querySelector<HTMLAnchorElement>(
      'a[href="/about-us"]',
    );
    expect(aboutLink).not.toBeNull();
    expect(aboutLink?.textContent).toBe("About us");
    expect(container.textContent).toContain("About Scribble");

    flushSync(() => root.unmount());
  });
});
