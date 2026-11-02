import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("app background artwork", () => {
  it("uses the local Scribble doodle image as a repeating body background", () => {
    const stylesheet = readFileSync(resolve(process.cwd(), "src/styles/app.css"), "utf8");
    const backgroundImage = readFileSync(
      resolve(process.cwd(), "public/scribble-background.svg"),
      "utf8",
    );

    expect(stylesheet).toContain('background-image: url("/scribble-background.svg")');
    expect(stylesheet).toContain("background-repeat: repeat");
    expect(backgroundImage).toContain('<svg xmlns="http://www.w3.org/2000/svg"');
    expect(backgroundImage).toContain('stroke="#7c9ce8"');
  });
});
