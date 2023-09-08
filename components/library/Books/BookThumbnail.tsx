'use client'

import { BiBookHeart } from 'react-icons/bi'
import { BookViewProps } from './BooksView'
import React from 'react'
import { truncate } from '@/lib/utils'

const MAX_STRING_LENGTH = 32

const BookThumbnail = ({ book }: BookViewProps) => {
  // const { setBookId, setBookModalOpen } = useBookStore()

  const openBookInfo = () => {
    // setBookId(book.id)
    // setBookModalOpen(true)
  }

  return (
    <button
      aria-hidden
      onClick={openBookInfo}
      className="flex flex-col text-left"
    >
      {book.coverImage ? (
        <img
          src={book.coverImage}
          alt={book.title}
          className="aspect-[5/8] w-full rounded-lg bg-base-300 object-cover"
        />
      ) : (
        <div className="flex aspect-[5/8] w-full flex-col items-center justify-center rounded-md bg-neutral text-center text-neutral-content shadow">
          <BiBookHeart className="h-12 w-12" />
          {truncate(book.title, MAX_STRING_LENGTH)}
        </div>
      )}
      <p className="font-bold line-clamp-2">{book.title}</p>
      <p>{book.Author?.[0].name}</p>
    </button>
  )
}

export default BookThumbnail
