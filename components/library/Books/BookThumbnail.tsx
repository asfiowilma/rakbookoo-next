'use client'

import { BiBookHeart } from 'react-icons/bi'
import type { BookViewProps } from '@/types/books'
import Image from 'next/image'
import React from 'react'
import { truncate } from '@/lib/utils'
import { useBookStore } from '@/lib/hooks/useBookStore'

const MAX_STRING_LENGTH = 32

const BookThumbnail = ({ book }: BookViewProps) => {
  const { setBookId, setBookModalOpen } = useBookStore()

  const openBookInfo = () => {
    setBookId(book.id)
    setBookModalOpen(true)
  }

  return (
    <button
      aria-hidden
      onClick={openBookInfo}
      className="flex flex-col text-left"
    >
      {book.coverImage ? (
        <Image
          height={192}
          width={120}
          src={book.coverImage}
          alt={book.title}
          className="aspect-[5/8] w-full h-auto rounded-lg bg-base-300 object-cover"
        />
      ) : (
        <div className="flex aspect-[5/8] w-full flex-col items-center justify-center rounded-md bg-neutral text-center text-neutral-content shadow">
          <BiBookHeart className="h-12 w-12" />
          {truncate(book.title, MAX_STRING_LENGTH)}
        </div>
      )}
      <p className="mt-2 font-bold line-clamp-2">{book.title}</p>
      <p>{book.authors?.[0]?.name}</p>
    </button>
  )
}

export default BookThumbnail
