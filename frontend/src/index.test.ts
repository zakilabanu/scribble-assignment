import { describe, expect, it } from "vitest";
import html from "../index.html?raw";

describe("document metadata", () => {
  it("uses a descriptive title for the browser tab", () => {
    expect(html).toMatch(/<title>Scribble — Draw and Guess<\/title>/);
  });
});
