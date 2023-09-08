import { BiBookHeart } from 'react-icons/bi'
import { BookViewProps } from './BooksView'
import Image from 'next/image'
import React from 'react'

const BookListItem = ({ book }: BookViewProps) => {
  return (
    <div className="flex items-center gap-2">
      {book.coverImage ? (
        <Image
          width={32}
          height={48}
          src={book.coverImage}
          alt={book.title}
          className="flex-none aspect-[5/8] w-8 rounded-lg bg-base-300 object-cover"
        />
      ) : (
        <div className="flex flex-none aspect-[5/8] w-8 flex-col items-center justify-center rounded-md bg-neutral text-center text-neutral-content shadow">
          <BiBookHeart />
        </div>
      )}
      <div className="inline-flex">
        <span className="font-bold flex-none">{book.title}</span>
        <span>・</span>
        <span>{book.Author?.map((author) => author.name).join(', ')}</span>
      </div>
    </div>
  )
}

export default BookListItem
