import { Container } from "@/components/common/Container/Container";
import { EventBanner } from "@/components/home/EventBanner/EventBanner";
import { AuthorHero } from "@/components/home/AuthorHero/AuthorHero";

export const revalidate = 300;

export default function HomePage() {
  return (
    <main>
      <Container>
        <EventBanner
          title="Festival of Stories – Exclusive Launch Offers"
          subtitle="Celebrate the works of Sri Girimane Shyamarao with curated collections, signed copies, and festival-only bundles."
          ctaLabel="Browse all books"
          href="/books"
          badge="New • Limited time"
        />

        <AuthorHero
          name="Sri Girimane Shyamarao"
          tagline="Timeless stories. Contemporary relevance."
          description="Discover a body of work that bridges generations — stories rooted in culture, language, and lived experience. Explore collections, essays, and rare editions, all in one dedicated space."
          imgSrc="/images/author-girimane-shyamarao.png"
        />
      </Container>
    </main>
  );
}

