import type { Prisma, Book, Author } from '@prisma/client'

const bookWithAuthor = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: { authors: true },
})

const bookDetails = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: { authors: true, notes: true, tags: true, shelf: true },
})

type BookWithAuthor = Prisma.BookGetPayload<typeof bookWithAuthor>

type BookDetails = Prisma.BookGetPayload<typeof bookDetails>

type BookViewProps = {
  book: BookWithAuthor
}

type BooksViewProps = {
  view?: LibraryView
  books: BookWithAuthor[]
}
