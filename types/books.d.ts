import type { Prisma, Book, Author } from '@prisma/client'

const bookWithAuthor = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: { authors: true },
})

const bookWithAuthorAndTag = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: { authors: true, tags: true },
})

const bookDetails = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: { authors: true, notes: true, tags: true, shelf: true },
})

type BookWithAuthor = Prisma.BookGetPayload<typeof bookWithAuthor>
type BookWithAuthorAndTag = Prisma.BookGetPayload<typeof bookWithAuthorAndTag>
type BookDetails = Prisma.BookGetPayload<typeof bookDetails>

type BookViewProps = {
  book: BookWithAuthorAndTag
}

type BooksViewProps = {
  view?: LibraryView
  books: BookWithAuthorAndTag[]
}
