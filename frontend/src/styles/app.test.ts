import { describe, expect, it } from "vitest";
import background from "../assets/scribble-background.svg?raw";
import styles from "./app.css?raw";

describe("app background", () => {
  it("tiles the local drawing image across the page with a fallback color", () => {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    try {
      const bodyRule = Array.from(style.sheet!.cssRules).find(
        (rule): rule is CSSStyleRule => rule.type === CSSRule.STYLE_RULE && (rule as CSSStyleRule).selectorText === "body",
      );
      expect(bodyRule?.style.getPropertyValue("background-image")).toContain("../assets/scribble-background.svg");
      expect(bodyRule?.style.getPropertyValue("background-repeat")).toBe("repeat");
      expect(bodyRule?.style.getPropertyValue("background-color")).toBe("#f3f4f6");
      expect(bodyRule?.style.getPropertyValue("min-height")).toBe("100vh");

      const image = new DOMParser().parseFromString(background, "image/svg+xml");
      expect(image.querySelector("parsererror")).toBeNull();
      expect(image.documentElement.tagName).toBe("svg");
      expect(image.querySelector("path")).not.toBeNull();
    } finally {
      style.remove();
    }
  });
});
