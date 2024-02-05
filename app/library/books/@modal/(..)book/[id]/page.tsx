import { BookDetails } from '@/types/books'
import BookModal from '@/components/library/Books/BookModal'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import { notFound } from 'next/navigation'
import prisma from '@/services/prisma'

type BookModalProps = { params: { id: string } }

const BookModalPage = async ({ params: { id: bookId } }: BookModalProps) => {
  const userId = await getUserId()
  if (!userId) return <></>

  const book = await prisma.book.findUnique({
    include: {
      authors: true,
      tags: true,
      notes: true,
      shelf: true,
    },
    where: {
      id: bookId,
      ownerId: userId,
    },
  })

  if (!book) return notFound()

  return <BookModal book={book as BookDetails} />
}

export default BookModalPage
