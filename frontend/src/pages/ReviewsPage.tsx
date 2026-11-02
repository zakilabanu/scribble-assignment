import { PageHeader } from "../components/PageHeader";

export function ReviewsPage() {
  return (
    <section className="panel placeholder-page reviews-page">
      <PageHeader
        kicker="Player reviews"
        title="Reviews"
        description="Hear what players think about Scribble."
      />
      <p>No player reviews are available yet. Check back soon.</p>
    </section>
  );
}
