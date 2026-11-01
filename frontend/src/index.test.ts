import { describe, expect, it } from "vitest";
import html from "../index.html?raw";

describe("application document", () => {
  it("uses the Scribble Game browser title", () => {
    const document = new DOMParser().parseFromString(html, "text/html");

    expect(document.title).toBe("Scribble Game");
  });
});
