import { BiPlus } from 'react-icons/bi'
import type { BookWithAuthor } from '@/types/books'
import BooksView from '@/components/library/Books/BooksView'
import BooksViewOptions from '@/components/library/Books/BooksViewOptions'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import { LibraryView } from '@/lib/enums'
import LibraryViewSelect from '@/components/library/LibraryViewSelect'
import LibraryViewToggle from '@/components/library/LibraryViewToggle'
import Link from 'next/link'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'
import { routes } from '@/lib/routes'

export const dynamic = 'force-dynamic'

const BooksPage = async ({ searchParams }: PageProps) => {
  const sessionData = await getUserId()
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
      ownerId: sessionData?.session?.user.id,
    },
  })

  return (
    <>
      <div className="flex w-full justify-between">
        <Breadcrumbs /> <LibraryViewToggle />
      </div>
      <div className="flex w-full justify-between">
        <h1 className="text-h1">Buku Saya</h1>
        <Link href={routes.newShelf} className="btn mt-4 gap-2 pl-2">
          <BiPlus className="h-6 w-6" />
          Buku Baru
        </Link>
      </div>
      <div className="w-full flex justify-end my-4 gap-1">
        <LibraryViewSelect />
        {view !== LibraryView.thumbnail && <BooksViewOptions />}
      </div>
      <BooksView view={view} books={books as BookWithAuthor[]} />
    </>
  )
}

export default BooksPage
