'use client'

import BookListItem from './BookListItem'
import type { BooksViewProps } from '@/types/books'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import useBooks from '@/context/queries/useBooks'

const BookList = ({ books: initBooks }: BooksViewProps) => {
  const { isLoading, data: books } = useBooks(initBooks)

  return isLoading ? (
    <div className="w-full grid grid-cols-1 gap-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={`sk-l-${i}`} className="flex items-center gap-2">
          <Skeleton className="aspect-[5/8] w-8" />
          <Skeleton className="w-30 h-4"></Skeleton>
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
