import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";
import { PrivacyPage } from "./PrivacyPage";

describe("PrivacyPage", () => {
  it("renders sample privacy policy content", () => {
    const markup = renderToStaticMarkup(<PrivacyPage />);

    expect(markup).toContain("Privacy Policy");
    expect(markup).toContain("Information in game rooms");
    expect(markup).toContain("dummy content");
  });

  it("serves the privacy policy at its route", () => {
    window.history.replaceState({}, "", "/privacy-policy");
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => root.render(<AppRoutes />));

    expect(container.textContent).toContain("Privacy Policy");
    expect(container.textContent).toContain("held temporarily in memory");

    flushSync(() => root.unmount());
  });
});
