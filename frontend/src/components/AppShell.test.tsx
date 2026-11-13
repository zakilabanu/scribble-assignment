import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";

describe("AppShell header", () => {
  it("shows shared navigation and preserves branding and footer links", () => {
    window.history.replaceState({}, "", "/about-us");
    const container = document.createElement("div");
    const root = createRoot(container);
    flushSync(() => root.render(<AppRoutes />));

    const header = container.querySelector("header");
    const nav = header?.querySelector('nav[aria-label="Main navigation"]');
    expect(header?.textContent).toContain("Scribble");
    expect(Array.from(nav?.querySelectorAll("a") ?? []).map((link) => [link.textContent, link.getAttribute("href")])).toEqual([
      ["Home", "/"],
      ["About", "/about-us"],
      ["Terms", "/terms-and-conditions"],
    ]);
    expect(Array.from(container.querySelectorAll("footer a")).map((link) => [link.textContent, link.getAttribute("href")])).toEqual([
      ["About Scribble", "/about-us"],
      ["Terms and conditions", "/terms-and-conditions"],
    ]);
    flushSync(() => root.unmount());
  });

  it("navigates between existing pages from the header without remounting the shell", () => {
    window.history.replaceState({}, "", "/about-us");
    const container = document.createElement("div");
    const root = createRoot(container);
    flushSync(() => root.render(<AppRoutes />));
    const header = container.querySelector("header");

    for (const [path, content] of [
      ["/terms-and-conditions", "These sample terms are placeholder content"],
      ["/", "Create Room"],
      ["/about-us", "How it works"],
    ]) {
      const link = header?.querySelector<HTMLAnchorElement>(`a[href="${path}"]`);
      expect(link).not.toBeNull();
      flushSync(() => link!.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 })));
      expect(window.location.pathname).toBe(path);
      expect(container.querySelector("main")?.textContent).toContain(content);
      expect(container.querySelector("header")).toBe(header);
    }
    flushSync(() => root.unmount());
  });
});
