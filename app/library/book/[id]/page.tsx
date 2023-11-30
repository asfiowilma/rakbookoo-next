import Book from '@/components/library/Books/Book'
import { type BookDetails } from '@/types/books'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'
import Breadcrumbs from '@/components/library/Breadcrumbs'

type BookPageProps = { params: { id: string } }

async function BookPage({ params: { id } }: BookPageProps) {
  const sessionData = await getUserId()
  const book = await prisma.book.findUnique({
    include: {
      authors: true,
      tags: true,
      notes: true,
      shelf: true,
    },
    where: {
      id: id,
      ownerId: sessionData?.session?.user.id,
    },
  })

  return (
    <>
      <Breadcrumbs book={book as BookDetails} className="mb-4" />
      <Book book={book as BookDetails} />
    </>
  )
}

export default BookPage
