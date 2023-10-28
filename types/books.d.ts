import type { Book, Author } from '@prisma/client'

interface BookWithAuthor extends Book {
  authors: Pick<Author, 'name'>[]
}

type BookViewProps = {
  book: BookWithAuthor
}

type BooksViewProps = {
  view?: LibraryView
  books: BookWithAuthor[]
}
