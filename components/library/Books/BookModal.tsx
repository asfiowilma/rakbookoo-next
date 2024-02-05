'use client'

import Book from './Book'
import { BookDetails } from '@/types/books'
import Modal from '@/components/ui/modal'
import React from 'react'
import { useRouter } from 'next/navigation'

type BookModalProps = {
  book: BookDetails
  shelfId?: number
}

const BookModal = ({ book }: BookModalProps) => {
  const router = useRouter()

  const onDismiss = (to: boolean) => {
    if (!to) router.back()
  }

  return (
    <Modal
      isOpen={true}
      setIsOpen={onDismiss}
      className="!max-w-screen-md w-full"
    >
      {/* {isLoading && <FaSpinner className="animate-spin" />} */}
      <Book book={book} isModal />
    </Modal>
  )
}

export default BookModal
