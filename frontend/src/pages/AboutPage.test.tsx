import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AboutPage } from "./AboutPage";

describe("AboutPage", () => {
  it("renders the about-us page with an explanation of Scribble", () => {
    const markup = renderToStaticMarkup(<AboutPage />);

    expect(markup).toContain("About Scribble");
    expect(markup).toContain("Draw, guess, and have fun together");
    expect(markup).toContain("How it works");
    expect(markup).toContain("Create a room");
  });
});
