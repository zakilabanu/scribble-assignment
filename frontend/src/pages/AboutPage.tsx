import { PageHeader } from "../components/PageHeader";

export function AboutPage() {
  return (
    <section className="panel placeholder-page about-page">
      <PageHeader
        kicker="About Scribble"
        title="A little imagination, a lot of fun together"
        description="The idea behind Scribble is simple: bring people together through drawing and guessing."
      />

      <div className="about-page__content">
        <h2>A sketch starts the conversation</h2>
        <p>
          A word becomes a drawing, and a drawing sparks a guess. That is the
          concept behind Scribble: seeing how differently we picture the same
          thing, and sharing a laugh along the way.
        </p>
        <h2>Better together</h2>
        <p>
          You do not need to be an artist to enjoy a little creativity with
          friends. Scribble is about the joy of playing together, not perfect
          pictures. Bring your imagination and a sense of humor.
        </p>
      </div>
    </section>
  );
}
