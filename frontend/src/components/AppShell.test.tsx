import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes";
import { RoomStoreProvider } from "../state/roomStore";

describe("AppShell footer", () => {
  it.each(["/about-us", "/terms-and-conditions", "/create-room"])(
    "offers a Home link that navigates to the start page from %s",
    (path) => {
      window.history.replaceState({}, "", path);
      const container = document.createElement("div");
      document.body.appendChild(container);
      const root = createRoot(container);

      flushSync(() => root.render(<RoomStoreProvider><AppRoutes /></RoomStoreProvider>));

      const homeLink = container.querySelector<HTMLAnchorElement>('footer a[href="/"]');
      expect(homeLink?.textContent).toBe("Home");
      expect(container.querySelector('footer a[href="/about-us"]')?.textContent).toBe("About Scribble");
      expect(container.querySelector('footer a[href="/terms-and-conditions"]')?.textContent).toBe("Terms and conditions");

      flushSync(() => homeLink?.click());
      expect(window.location.pathname).toBe("/");
      expect(container.textContent).toContain("Scribble Game");
      expect(container.textContent).toContain("Create Room");

      flushSync(() => root.unmount());
      container.remove();
    },
  );
});
