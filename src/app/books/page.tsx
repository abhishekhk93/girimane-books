import { Container } from "@/components/common/Container/Container";
import { BookGrid } from "@/components/books/BookGrid/BookGrid";

// ISR: Re-generate the page every 5 minutes
export const revalidate = 300;

// Mock data - replace with actual API call
const mockBooks = [
  {
    id: "1",
    title: "The Journey of Words",
    author: "Sri Girimane Shyamarao",
    price: 450,
    imageUrl: "/images/books/book-1.jpg",
    href: "/books/1",
    badge: "New",
  },
  {
    id: "2",
    title: "Tales from the Heartland",
    author: "Sri Girimane Shyamarao",
    price: 550,
    imageUrl: "/images/books/book-2.jpg",
    href: "/books/2",
  },
  {
    id: "3",
    title: "Echoes of Tradition",
    author: "Sri Girimane Shyamarao",
    price: 480,
    imageUrl: "/images/books/book-3.jpg",
    href: "/books/3",
    badge: "Bestseller",
  },
  {
    id: "4",
    title: "Voices of the Past",
    author: "Sri Girimane Shyamarao",
    price: 520,
    imageUrl: "/images/books/book-4.jpg",
    href: "/books/4",
  },
  {
    id: "5",
    title: "Stories of Wisdom",
    author: "Sri Girimane Shyamarao",
    price: 490,
    imageUrl: "/images/books/book-5.jpg",
    href: "/books/5",
  },
  {
    id: "6",
    title: "The Cultural Tapestry",
    author: "Sri Girimane Shyamarao",
    price: 600,
    imageUrl: "/images/books/book-6.jpg",
    href: "/books/6",
    badge: "Featured",
  },
  {
    id: "7",
    title: "Legacy of Words",
    author: "Sri Girimane Shyamarao",
    price: 470,
    imageUrl: "/images/books/book-7.jpg",
    href: "/books/7",
  },
  {
    id: "8",
    title: "Timeless Narratives",
    author: "Sri Girimane Shyamarao",
    price: 530,
    imageUrl: "/images/books/book-8.jpg",
    href: "/books/8",
  },
];

export default function BooksPage() {
  return (
    <main>
      <Container>
        <BookGrid
          books={mockBooks}
          title="All Books"
          description="Explore the complete collection of works by Sri Girimane Shyamarao. Each book offers unique insights into culture, tradition, and human experience."
        />
      </Container>
    </main>
  );
}


