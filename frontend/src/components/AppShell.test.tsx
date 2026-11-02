import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppShell } from "./AppShell";

describe("AppShell", () => {
  it("shows the play banner and links to room creation on every page", () => {
    const container = document.createElement("div");
    const root = createRoot(container);

    flushSync(() => {
      root.render(
        <MemoryRouter initialEntries={["/about-us"]}>
          <AppShell>
            <p>Page content</p>
          </AppShell>
        </MemoryRouter>,
      );
    });

    const banner = container.querySelector<HTMLElement>(
      'aside[aria-label="Play Scribble"]',
    );
    const createRoomLink = banner?.querySelector<HTMLAnchorElement>(
      'a[href="/create-room"]',
    );

    expect(banner?.textContent).toContain(
      "Ready to play? Gather your friends for a drawing game.",
    );
    expect(createRoomLink?.textContent).toBe("Create a room");
    expect(container.textContent).toContain("Page content");

    flushSync(() => root.unmount());
  });
});
