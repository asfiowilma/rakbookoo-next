'use client'

import { BiBookHeart } from 'react-icons/bi'
import type { BookViewProps } from '@/types/books'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { routes } from '@/lib/routes'
import { truncate } from '@/lib/utils'
import { useBook } from '@/lib/hooks/useBook'

const MAX_STRING_LENGTH = 32

const BookThumbnail = ({ book }: BookViewProps) => {
  // const { setBookId, setBookModalOpen } = useBook()

  // const openBookInfo = () => {
  //   setBookId(book.id)
  //   setBookModalOpen(true)
  // }

  return (
    <Link
      // aria-hidden
      // onClick={openBookInfo}
      href={routes.book(book.id)}
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
      <div className="mt-2 font-bold line-clamp-2">{book.title}</div>
      <div>{book.authors?.[0]?.name}</div>
    </Link>
  )
}

export default BookThumbnail
