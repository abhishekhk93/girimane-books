import { Container } from "@/components/common/Container/Container";
import { BookGrid } from "@/components/books/BookGrid/BookGrid";
import { getMockBooksForPage } from "./mockData";

// ISR: Re-generate the page every 5 minutes
export const revalidate = 300;

type BooksPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const params = await searchParams;
  const pageNumber = parseInt(params.page || "1", 10);
  const validPageNumber = isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber;

  // Get mock data for the requested page (replace with API call later)
  const booksData = getMockBooksForPage(validPageNumber);

  return (
    <main>
      <Container>
        <BookGrid
          books={booksData.books}
          title="All Books"
          description="Explore the complete collection of works by Sri Girimane Shyamarao. Each book offers unique insights into culture, tradition, and human experience."
          currentPage={booksData.pageNumber}
          totalPages={booksData.totalNumberOfPages}
        />
      </Container>
    </main>
  );
}
