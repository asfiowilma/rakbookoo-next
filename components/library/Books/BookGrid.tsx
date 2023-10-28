'use client'

import BookThumbnail from './BookThumbnail'
import type { BooksViewProps } from '@/types/books'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import useBooks from '@/context/queries/useBooks'

const BookGrid = ({ books: initBooks }: BooksViewProps) => {
  const { isLoading, data: books } = useBooks(initBooks)

  return isLoading ? (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-6 w-full">
      {Array.from({ length: 12 })?.map((_, i) => (
        <div key={`sk-t-${i}`} className="flex flex-col text-left gap-2">
          <Skeleton className="aspect-[5/8] w-full"></Skeleton>
          <Skeleton className="w-full h-4"></Skeleton>
        </div>
      ))}
    </div>
  ) : (
    <div className="grid w-full grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-6">
      {books?.map((book) => (
        <BookThumbnail key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookGrid
