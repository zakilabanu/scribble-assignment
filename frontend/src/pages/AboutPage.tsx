import { PageHeader } from "../components/PageHeader";

export function AboutPage() {
  return (
    <section className="panel placeholder-page about-page">
      <PageHeader
        kicker="About Scribble"
        title="Draw, guess, and have fun together"
        description="Scribble is a multiplayer drawing and guessing game where friends take turns bringing words to life and racing to guess what they see."
      />

      <div className="about-page__content">
        <h2>How it works</h2>
        <p>
          Create a room and invite others to join with its room code. Players
          take turns drawing a secret word while everyone else submits their
          best guesses. Correct guesses earn points, and the fun comes from
          seeing every sketch interpreted in a different way.
        </p>
        <h2>Made for playing together</h2>
        <p>
          Scribble keeps the focus on quick rounds, creative drawings, and
          memorable moments with friends. No artistic skills are needed—just a
          little imagination and a willingness to guess.
        </p>
      </div>
    </section>
  );
}
