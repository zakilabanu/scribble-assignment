import { describe, expect, it } from "vitest";
import background from "../assets/scribble-background.svg?raw";
import styles from "./app.css?raw";

describe("app background", () => {
  it("tiles the local drawing image across the page with a warm fallback color", () => {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    try {
      const bodyRule = Array.from(style.sheet!.cssRules).find(
        (rule): rule is CSSStyleRule => rule.type === CSSRule.STYLE_RULE && (rule as CSSStyleRule).selectorText === "body",
      );
      expect(bodyRule?.style.getPropertyValue("background-image")).toContain("../assets/scribble-background.svg");
      expect(bodyRule?.style.getPropertyValue("background-repeat")).toBe("repeat");
      expect(bodyRule?.style.getPropertyValue("background-color")).toBe("#f8f4eb");
      expect(bodyRule?.style.getPropertyValue("min-height")).toBe("100vh");

      const image = new DOMParser().parseFromString(background, "image/svg+xml");
      expect(image.querySelector("parsererror")).toBeNull();
      expect(image.documentElement.tagName).toBe("svg");
      expect(image.querySelector("path")).not.toBeNull();
      expect(image.querySelector("g")?.getAttribute("stroke")).toBe("#7395b6");
      expect(image.querySelector("g")?.getAttribute("opacity")).toBe("0.3");

      const rootRule = Array.from(style.sheet!.cssRules).find(
        (rule): rule is CSSStyleRule => rule.type === CSSRule.STYLE_RULE && (rule as CSSStyleRule).selectorText === ":root",
      );
      expect(rootRule?.style.getPropertyValue("background")).toBe("#f8f4eb");
      expect(rootRule?.style.getPropertyValue("--surface").trim()).toBe("#ffffff");
      for (const selector of [".panel", ".card", ".game-page"]) {
        const rule = Array.from(style.sheet!.cssRules).find(
          (candidate): candidate is CSSStyleRule => candidate.type === CSSRule.STYLE_RULE && (candidate as CSSStyleRule).selectorText === selector,
        );
        expect(rule?.style.getPropertyValue("background")).toBe("var(--surface)");
      }
    } finally {
      style.remove();
    }
  });
});
