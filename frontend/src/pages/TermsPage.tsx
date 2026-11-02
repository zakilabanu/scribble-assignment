import { PageHeader } from "../components/PageHeader";

export function TermsPage() {
  return (
    <section className="panel placeholder-page terms-page">
      <PageHeader
        kicker="Terms and conditions"
        title="Terms and Conditions"
        description="These sample terms are placeholder content for the Scribble application."
      />

      <div className="about-page__content">
        <h2>Using Scribble</h2>
        <p>
          Scribble is provided for casual, friendly drawing and guessing. By
          using the app, you agree to play respectfully and avoid sharing
          content that is harmful or inappropriate.
        </p>
        <h2>Availability</h2>
        <p>
          This demo is provided as-is and may change or become unavailable at
          any time. Game rooms and their contents are temporary and are not
          guaranteed to be retained.
        </p>
        <h2>Placeholder notice</h2>
        <p>
          These terms are dummy content for demonstration only and are not
          legal advice or a finalized legal agreement.
        </p>
      </div>
    </section>
  );
}
