'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import Book from './Book'
import { FaSpinner } from 'react-icons/fa'
import Modal from '@/components/ui/modal'
import { RESET_BOOK_ID } from '@/lib/constants/book'
import { urlBuilder } from '@/lib/utils'
import { useBookStore } from '@/lib/hooks/useBookStore'
import useGetBookDetailsQuery from '@/context/queries/book/useGetBookDetailsQuery'

type BookModalProps = {
  shelfId?: number
}

const BookModal = ({ shelfId }: BookModalProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const routerParams = useSearchParams()

  const { bookId, isBookModalOpen, setBookModalOpen, setBookId } =
    useBookStore()
  const { data: book, isLoading } = useGetBookDetailsQuery(bookId)

  const getBookRoute = (id?: string) => {
    const params = new URLSearchParams(routerParams.toString())
    if (id) params.append('book', id)
    else params.delete('book')
    return urlBuilder(pathname, params)
  }

  useEffect(() => {
    if (bookId) router.replace(getBookRoute(bookId))
  }, [bookId])

  const setIsOpen = (to: boolean) => {
    if (!to) {
      setBookId(RESET_BOOK_ID)
      router.replace(getBookRoute())
    }
    setBookModalOpen(to)
  }

  return (
    <Modal isOpen={isBookModalOpen} setIsOpen={setIsOpen}>
      {isLoading && <FaSpinner className="animate-spin" />}
      {book && <Book book={book} />}
    </Modal>
  )
}

export default BookModal
