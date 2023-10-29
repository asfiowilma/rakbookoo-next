'use client'

import { BookModalLocation, RESET_BOOK_ID } from '@/lib/constants/book'
import React, { useEffect } from 'react'

import Book from './Book'
import Modal from '@/components/ui/modal'
import { routes } from '@/lib/routes'
import { urlBuilder } from '@/lib/utils'
import { useBookStore } from '@/lib/hooks/useBookStore'
import useGetBookDetailsQuery from '@/context/queries/book/useGetBookDetailsQuery'
import { useRouter } from 'next/navigation'

type BookModalProps = {
  location: BookModalLocation
  shelfId?: number
}

const BookModal = ({ location, shelfId }: BookModalProps) => {
  const router = useRouter()
  const { bookId, isBookModalOpen, setBookModalOpen, setBookId } =
    useBookStore()
  const { data: book, isLoading } = useGetBookDetailsQuery(bookId)

  const getBookRoute = (withBook: boolean = true) => {
    const book = { book: bookId }
    if (location == BookModalLocation.library)
      return urlBuilder(routes.library, withBook ? book : {})
    else if (location == BookModalLocation.shelf)
      return urlBuilder(routes.shelf(shelfId), withBook ? book : {})
    return routes.library
  }

  useEffect(() => {
    // if (isBookModalOpen && bookId) router.replace(getBookRoute())
    // else router.replace(getBookRoute(false))
  }, [bookId, isBookModalOpen])

  const setIsOpen = (to: boolean) => {
    if (!to) setBookId(RESET_BOOK_ID)
    setBookModalOpen(to)
  }

  return isLoading || !book ? (
    <></>
  ) : (
    <Modal isOpen={isBookModalOpen} setIsOpen={setIsOpen}>
      {book && <Book book={book} />}
    </Modal>
  )
}

export default BookModal
