import BooksView from '@/components/library/Books/BooksView'

import { BiPlus } from 'react-icons/bi'
import { LibraryView } from '@/lib/enums'
import LibraryViewSelect from '@/components/library/LibraryViewSelect'
import Link from 'next/link'
import React from 'react'
import { getUserId } from '@/services/getUserId'
import { routes } from '@/lib/routes'
import { urlBuilder } from '@/lib/utils'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import { type Shelf } from '@prisma/client'
import { redirect } from 'next/navigation'
import BooksViewOptions from '@/components/library/Books/BooksViewOptions'
import type { BookWithAuthorAndTag } from '@/types/books'
import prisma from '@/services/prisma'
import toast from 'react-hot-toast'

export const dynamic = 'force-dynamic'

const ShelfPage = async ({ params, searchParams }: PageProps) => {
  const userId = await getUserId()
  if (!userId) {
    toast.error('Kamu perlu login untuk mengakses halaman tersebut')
    redirect(routes.login)
  }

  const id = Number(params?.['id'] as string)
  const view = searchParams?.['view'] as LibraryView

  const shelf = await prisma.shelf.findFirst({
    where: {
      userUid: userId,
      id: id,
    },
    include: {
      books: {
        include: {
          authors: {
            take: view === LibraryView.thumbnail ? 1 : undefined,
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  if (!shelf) redirect('/not-found')

  return (
    <>
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
        <BooksViewOptions />
      </div>
      <BooksView view={view} books={shelf?.books as BookWithAuthorAndTag[]} />
    </>
  )
}

export default ShelfPage
