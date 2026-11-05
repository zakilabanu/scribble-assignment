import { PageHeader } from "../components/PageHeader";

export function PrivacyPage() {
  return (
    <section className="panel placeholder-page privacy-page">
      <PageHeader
        kicker="Privacy policy"
        title="Privacy Policy"
        description="This sample privacy policy is placeholder content for the Scribble application."
      />

      <div className="about-page__content">
        <h2>Information in game rooms</h2>
        <p>
          Scribble uses the player names, room codes, drawings, and guesses you
          enter to run the current game. In this demo, room data is held
          temporarily in memory and is cleared when the server restarts.
        </p>
        <h2>Placeholder notice</h2>
        <p>
          This sample policy is dummy content for demonstration only and does
          not describe a production service or provide legal advice.
        </p>
      </div>
    </section>
  );
}
