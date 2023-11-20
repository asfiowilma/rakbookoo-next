'use client'

import BookListItem from './BookListItem'
import type { BooksViewProps } from '@/types/books'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import useGetBooksQuery from '@/context/queries/book/useGetBooksQuery'

const BookList = ({ books: initBooks }: BooksViewProps) => {
  const { isLoading, data: books } = useGetBooksQuery(initBooks)

  return isLoading ? (
    <div className="w-full grid grid-cols-1 gap-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={`sk-l-${i}`} className="flex items-center gap-2">
          <Skeleton className="aspect-[5/8] w-8 h-auto" />
          <Skeleton className="w-full max-w-lg h-12"></Skeleton>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full grid grid-cols-1 gap-y-2">
      {books?.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
