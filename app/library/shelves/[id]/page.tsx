import BooksView, { BookWithAuthor } from '@/components/library/Books/BooksView'

import { BiPlus } from 'react-icons/bi'
import { LibraryView } from '@/lib/enums'
import LibraryViewSelect from '@/components/library/LibraryViewSelect'
import Link from 'next/link'
import React from 'react'
import getUserId from '@/services/getUserId'
import { routes } from '@/lib/routes'
import { urlBuilder } from '@/lib/utils'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import { type Shelf } from '@prisma/client'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const ShelfPage = async ({ params, searchParams }: PageProps) => {
  const { data: sessionData } = await getUserId()
  const id = Number(params?.['id'] as string)
  const view = searchParams?.['view'] as LibraryView

  const shelf = await prisma.shelf
    .findFirst({
      where: {
        userUid: sessionData.session?.user.id,
        id: id,
      },
      include: {
        Book: {
          include: {
            Author: {
              take: view === LibraryView.thumbnail ? 1 : undefined,
              select: {
                name: true,
              },
            },
          },
        },
      },
    })
    .catch((res) => console.error(res))

  if (!shelf) redirect('/not-found')

  return (
    <>
      <pre>{JSON.stringify(shelf, null, 2)}</pre>
      <div className="flex w-full justify-between">
        <Breadcrumbs shelf={shelf as Shelf} />
      </div>
      <div className="flex w-full justify-between">
        <h1 className="text-h1">{shelf?.name}</h1>
        <Link
          href={urlBuilder(routes.newBook, { shelfId: shelf?.id })}
          className="btn mt-4 gap-2 pl-2"
        >
          <BiPlus className="h-6 w-6" />
          Buku Baru
        </Link>
      </div>
      <div className="w-full flex justify-end my-4">
        <LibraryViewSelect />
      </div>
      <BooksView view={view} books={shelf?.Book as BookWithAuthor[]} />
    </>
  )
}

export default ShelfPage
