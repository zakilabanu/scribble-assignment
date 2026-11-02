import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";
import { TermsPage } from "./TermsPage";

describe("TermsPage", () => {
  it("renders sample terms and conditions content", () => {
    const markup = renderToStaticMarkup(<TermsPage />);

    expect(markup).toContain("Terms and Conditions");
    expect(markup).toContain("Using Scribble");
    expect(markup).toContain("Availability");
    expect(markup).toContain("dummy content");
  });

  it("serves the terms page at its route", () => {
    window.history.replaceState({}, "", "/terms-and-conditions");
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => root.render(<AppRoutes />));

    expect(container.textContent).toContain("Terms and Conditions");
    expect(container.textContent).toContain("These sample terms are placeholder content");

    flushSync(() => root.unmount());
  });
});
