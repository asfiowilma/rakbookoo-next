import { BookDetails } from '@/types/books'
import BookModal from '@/components/library/Books/BookModal'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'

type BookModalProps = { params: { id: string } }

const BookModalPage = async ({ params: { id: bookId } }: BookModalProps) => {
  const sessionData = await getUserId()
  const book = await prisma.book.findUnique({
    include: {
      authors: true,
      tags: true,
      notes: true,
      shelf: true,
    },
    where: {
      id: bookId,
      ownerId: sessionData?.session?.user.id,
    },
  })

  return <BookModal book={book as BookDetails} />
}

export default BookModalPage
