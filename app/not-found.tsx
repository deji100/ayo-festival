import Link from "next/link";
import { FestivalLayout } from "@/components/festival-site";

export default function NotFound() {
  return (
    <FestivalLayout>
      <section className="section">
        <div className="container">
          <article className="section-card centered-card">
            <p className="eyebrow">Page Not Found</p>
            <h1>This path is not part of the festival guide.</h1>
            <p>
              Return to the homepage to explore the history, tournament, gallery,
              and partnership sections.
            </p>
            <div className="button-row">
              <Link href="/" className="button button-primary">
                Back to Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </FestivalLayout>
  );
}
