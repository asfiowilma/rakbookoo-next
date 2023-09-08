import BooksView, { BookWithAuthor } from '@/components/library/Books/BooksView'

import { BiPlus } from 'react-icons/bi'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import { LibraryView } from '@/lib/enums'
import LibraryViewSelect from '@/components/library/LibraryViewSelect'
import LibraryViewToggle from '@/components/library/LibraryViewToggle'
import Link from 'next/link'
import React from 'react'
import getUserId from '@/services/getUserId'
import { routes } from '@/lib/routes'

export const dynamic = 'force-dynamic'

const BooksPage = async ({ searchParams }: PageProps) => {
  const { data: sessionData } = await getUserId()
  const view = searchParams?.['view'] as LibraryView

  const books = await prisma.book
    .findMany({
      include: {
        Author: {
          take: view === LibraryView.thumbnail ? 1 : undefined,
          select: {
            name: true,
          },
        },
      },
      where: {
        Shelf: {
          userUid: sessionData.session?.user.id,
        },
      },
    })
    .catch((res) => console.error(res))

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
      <div className="w-full flex justify-end my-4">
        <LibraryViewSelect />
      </div>
      <BooksView view={view} books={books as BookWithAuthor[]} />
    </>
  )
}

export default BooksPage
