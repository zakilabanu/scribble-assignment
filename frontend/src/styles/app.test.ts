import { describe, expect, it } from "vitest";
import styles from "./app.css?raw";

describe("app background", () => {
  it("uses a solid light gray background across the full page", () => {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    try {
      const rules = Array.from(style.sheet!.cssRules);
      const ruleFor = (selector: string) => rules.find(
        (rule): rule is CSSStyleRule => rule.type === CSSRule.STYLE_RULE && (rule as CSSStyleRule).selectorText === selector,
      );
      const body = ruleFor("body")?.style;
      const root = ruleFor(":root")?.style;

      expect(body?.getPropertyValue("background-color")).toBe("#f3f4f6");
      expect(body?.getPropertyValue("background-image")).toBe("");
      expect(body?.getPropertyValue("background-repeat")).toBe("");
      expect(body?.getPropertyValue("background")).toBe("");
      expect(body?.getPropertyValue("min-height")).toBe("100vh");
      expect(root?.getPropertyValue("background")).toBe("#f3f4f6");
      expect(ruleFor("#root")?.style.getPropertyValue("min-height")).toBe("100vh");
    } finally {
      style.remove();
    }
  });
});
