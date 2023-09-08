import type { Author, Book } from '@prisma/client'

import BookListItem from './BookListItem'
import BookTable from './BookTable'
import BookThumbnail from './BookThumbnail'
import { LibraryView } from '@/lib/enums'
import React from 'react'

export interface BookWithAuthor extends Book {
  Author: Pick<Author, 'name'>[]
}

export type BookViewProps = {
  book: BookWithAuthor
}

export type BooksViewProps = {
  view: LibraryView
  books: BookWithAuthor[]
}

const BooksView = ({ view, books }: BooksViewProps) => {
  switch (view) {
    case LibraryView.list:
      return (
        <div className="w-full grid grid-cols-1 gap-y-2">
          {books?.map((book) => (
            <BookListItem key={book.id} book={book} />
          ))}
        </div>
      )
    case LibraryView.table:
      return <BookTable books={books} />
    case LibraryView.thumbnail:
    default:
      return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-6">
          {books?.map((book) => (
            <BookThumbnail key={book.id} book={book} />
          ))}
        </div>
      )
  }
}

export default BooksView
