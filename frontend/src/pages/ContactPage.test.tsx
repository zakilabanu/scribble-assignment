import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";
import { ContactPage } from "./ContactPage";

describe("ContactPage", () => {
  it("renders contact guidance without inventing a support destination", () => {
    const markup = renderToStaticMarkup(<ContactPage />);

    expect(markup).toContain("Contact us");
    expect(markup).toContain("Get in touch");
    expect(markup).toContain("does not have a dedicated support email address or contact form");
    expect(markup).toContain("contact the organizer through the communication channel they provided");
  });

  it("serves the page at /contact-us and exposes its footer link", () => {
    window.history.replaceState({}, "", "/contact-us");
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => root.render(<AppRoutes />));

    expect(container.textContent).toContain("Get in touch");
    const contactLink = container.querySelector<HTMLAnchorElement>(
      'footer a[href="/contact-us"]',
    );
    expect(contactLink?.textContent).toBe("Contact us");

    flushSync(() => root.unmount());
  });
});
