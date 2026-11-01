import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { flushSync } from "react-dom";
import { afterEach, describe, expect, it } from "vitest";
import { AppShell } from "./AppShell";

describe("AppShell logo", () => {
  let container: HTMLDivElement | undefined;
  let root: Root | undefined;

  afterEach(() => {
    root?.unmount();
    container?.remove();
    root = undefined;
    container = undefined;
  });

  it("renders the Scribble logo in the brand color", () => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);

    flushSync(() => {
      root?.render(createElement(AppShell, null, createElement("div")));
    });

    const logo = container.querySelector(".app-shell__title");
    expect(logo?.textContent).toBe("Scribble");
    expect(logo?.className).toBe("app-shell__title");

  });
});
