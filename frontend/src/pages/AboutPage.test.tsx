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
    expect(markup).toContain("A little imagination, a lot of fun together");
    expect(markup).toContain(
      "The idea behind Scribble is simple: bring people together through drawing and guessing.",
    );
    expect(markup).toContain("A sketch starts the conversation");
    expect(markup).toContain(
      "A word becomes a drawing, and a drawing sparks a guess.",
    );
    expect(markup).toContain("Better together");
    expect(markup).toContain(
      "Scribble is about the joy of playing together, not perfect pictures.",
    );
  });

  it("serves the page at /about-us and exposes footer links", () => {
    window.history.replaceState({}, "", "/about-us");
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => root.render(<AppRoutes />));

    const aboutLink = container.querySelector<HTMLAnchorElement>(
      'footer a[href="/about-us"]',
    );
    expect(aboutLink).not.toBeNull();
    expect(aboutLink?.textContent).toBe("About Scribble");
    expect(container.querySelector("h1")?.textContent).toBe(
      "A little imagination, a lot of fun together",
    );

    const termsLink = container.querySelector<HTMLAnchorElement>(
      'footer a[href="/terms-and-conditions"]',
    );
    expect(termsLink?.textContent).toBe("Terms and conditions");

    flushSync(() => root.unmount());
    window.history.replaceState({}, "", "/");
  });

  it("opens the about-us page from the shared footer", () => {
    window.history.replaceState({}, "", "/");
    const container = document.createElement("div");
    const root = createRoot(container);

    try {
      flushSync(() => root.render(<AppRoutes />));
      const aboutLink = container.querySelector<HTMLAnchorElement>(
        'footer a[href="/about-us"]',
      );
      expect(aboutLink).not.toBeNull();

      flushSync(() => {
        aboutLink?.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 }),
        );
      });

      expect(window.location.pathname).toBe("/about-us");
      expect(container.querySelector("h1")?.textContent).toBe(
        "A little imagination, a lot of fun together",
      );
    } finally {
      flushSync(() => root.unmount());
      window.history.replaceState({}, "", "/");
    }
  });
});
