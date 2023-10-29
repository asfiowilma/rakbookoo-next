import { BiBookHeart } from 'react-icons/bi'
import type { BookViewProps } from '@/types/books'
import Image from 'next/image'
import Rating from './Rating'
import React from 'react'
import { useBookStore } from '@/lib/hooks/useBookStore'

const BookListItem = ({ book }: BookViewProps) => {
  const { setBookId, setBookModalOpen } = useBookStore()

  const openBookInfo = () => {
    setBookId(book.id)
    setBookModalOpen(true)
  }

  return (
    <button
      onClick={openBookInfo}
      className="flex items-center gap-2 hover:bg-neutral-focus cursor-pointer rounded-box"
    >
      {book.coverImage ? (
        <Image
          width={32}
          height={48}
          src={book.coverImage}
          alt={book.title}
          className="flex-none aspect-[5/8] w-8 h-auto rounded-lg bg-base-300 object-cover"
        />
      ) : (
        <div className="flex flex-none aspect-[5/8] w-8 flex-col items-center justify-center rounded-md bg-neutral text-center text-neutral-content shadow">
          <BiBookHeart />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <div className="inline-flex">
          <span className="font-bold flex-none">{book.title}</span>
          <span>・</span>
          <span>{book.authors?.map((author) => author.name).join(', ')}</span>
        </div>
        {book?.rating && (
          <Rating rating={book.rating} bookId={book.id} readonly />
        )}
      </div>
    </button>
  )
}

export default BookListItem
