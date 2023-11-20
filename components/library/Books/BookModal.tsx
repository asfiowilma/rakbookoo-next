'use client'

import React, { useEffect } from 'react'
import { bookId, isBookModalOpen } from '@/lib/signals/book'

import Book from './Book'
import { FaSpinner } from 'react-icons/fa'
import Modal from '@/components/ui/modal'
import { useBook } from '@/lib/hooks/useBook'
import useGetBookDetailsQuery from '@/context/queries/book/useGetBookDetailsQuery'
import { useSearchParams } from 'next/navigation'

type BookModalProps = {
  shelfId?: number
}

const BookModal = (_: BookModalProps) => {
  const params = useSearchParams()
  const { setBookModalOpen, setBookId } = useBook()
  const { data: book, isLoading } = useGetBookDetailsQuery(bookId.value)

  useEffect(() => {
    const book = params.get('book')
    if (book) {
      setBookId(book)
      setBookModalOpen(true)
    }
  }, [])

  return (
    <Modal
      isOpen={isBookModalOpen.value}
      setIsOpen={setBookModalOpen}
      className="!max-w-screen-md w-full"
    >
      {isLoading && <FaSpinner className="animate-spin" />}
      {book && <Book book={book} />}
    </Modal>
  )
}

export default BookModal
