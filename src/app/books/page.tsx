import { Container } from "@/components/common/Container/Container";
import { BookGrid } from "@/components/books/BookGrid/BookGrid";
import { mockBooksResponse } from "./mockData";

// ISR: Re-generate the page every 5 minutes
export const revalidate = 300;

export default function BooksPage() {
  return (
    <main>
      <Container>
        <BookGrid
          books={mockBooksResponse.books}
          title="All Books"
          description="Explore the complete collection of works by Sri Girimane Shyamarao. Each book offers unique insights into culture, tradition, and human experience."
        />
      </Container>
    </main>
  );
}
