import BookGrid from './BookGrid'
import BookList from './BookList'
import BookTable from './BookTable'
import type { BooksViewProps } from '@/types/books'
import { LibraryView } from '@/lib/enums'
import React from 'react'

const BooksView = ({ view, books }: BooksViewProps) => {
  switch (view) {
    case LibraryView.list:
      return <BookList books={books} />
    case LibraryView.table:
      return <BookTable books={books} />
    case LibraryView.thumbnail:
      return <BookGrid books={books} />
  }
}

export default BooksView
