import Book from '@/components/library/Books/Book'
import { type BookDetails } from '@/types/books'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import { redirect } from 'next/navigation'
import { routes } from '@/lib/routes'
import { toast } from 'react-hot-toast'

type BookPageProps = { params: { id: string } }

async function BookPage({ params: { id } }: BookPageProps) {
  const userId = await getUserId()
  if (!userId) {
    toast.error('Kamu perlu login untuk mengakses halaman tersebut')
    redirect(routes.login)
  }

  const book = await prisma.book.findUnique({
    include: {
      authors: true,
      tags: true,
      notes: true,
      shelf: true,
    },
    where: {
      id: id,
      ownerId: userId,
    },
  })
  if (!book) redirect('/not-found')

  return (
    <>
      <Breadcrumbs book={book as BookDetails} className="mb-4" />
      <Book book={book as BookDetails} />
    </>
  )
}

export default BookPage
