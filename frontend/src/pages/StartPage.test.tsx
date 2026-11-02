import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";

describe("StartPage", () => {
  it("shows the updated title on the home page", () => {
    window.history.replaceState({}, "", "/");
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => root.render(<AppRoutes />));

    expect(container.querySelector("h1")?.textContent).toBe(
      "Scribble: Draw & Guess",
    );

    flushSync(() => root.unmount());
  });
});
