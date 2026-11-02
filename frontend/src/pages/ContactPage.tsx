import { PageHeader } from "../components/PageHeader";

export function ContactPage() {
  return (
    <section className="panel placeholder-page contact-page">
      <PageHeader
        kicker="Contact us"
        title="Get in touch"
        description="We welcome questions and feedback about Scribble."
      />

      <div className="about-page__content">
        <h2>How to reach us</h2>
        <p>
          This demo does not have a dedicated support email address or contact
          form. If you are using Scribble as part of a course or project, please
          contact the organizer through the communication channel they provided.
        </p>
        <h2>Helpful details to include</h2>
        <p>
          When reporting an issue, describe what you were trying to do, what
          happened, and the browser you are using. Please do not include private
          or sensitive information.
        </p>
      </div>
    </section>
  );
}
