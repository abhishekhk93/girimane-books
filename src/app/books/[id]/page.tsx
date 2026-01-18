import { Container } from "@/components/common/Container/Container";
import { BookDetail } from "@/components/books/BookDetail/BookDetail";
import { notFound } from "next/navigation";

// ISR: Re-generate the page every 5 minutes
export const revalidate = 300;

type PageProps = {
  params: {
    id: string;
  };
};

async function getBook(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/books/${id}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function BookDetailPage({ params }: PageProps) {
  const book = await getBook(params.id);

  if (!book) {
    notFound();
  }

  return (
    <main>
      <Container>
        <BookDetail book={book} />
      </Container>
    </main>
  );
}