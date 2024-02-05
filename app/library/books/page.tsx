import type { BookWithAuthorAndTag } from '@/types/books'
import BooksView from '@/components/library/Books/BooksView'
import BooksViewOptions from '@/components/library/Books/BooksViewOptions'
import { LibraryView } from '@/lib/enums'
import LibraryViewSelect from '@/components/library/LibraryViewSelect'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import { notFound } from 'next/navigation'
import prisma from '@/services/prisma'

export const dynamic = 'force-dynamic'

const BooksPage = async ({ searchParams }: PageProps) => {
  const userId = await getUserId()
  if (!userId) return <></>

  const view = searchParams?.['view'] as LibraryView

  const books = await prisma.book.findMany({
    include: {
      authors: {
        take: view === LibraryView.thumbnail ? 1 : undefined,
        select: {
          name: true,
        },
      },
    },
    where: {
      ownerId: userId,
    },
  })

  if (!books) return notFound()

  return (
    <>
      <div className="w-full flex justify-end my-4 gap-1">
        <LibraryViewSelect />
        {view !== LibraryView.thumbnail && <BooksViewOptions />}
      </div>

      <BooksView view={view} books={books as BookWithAuthorAndTag[]} />
    </>
  )
}

export default BooksPage
