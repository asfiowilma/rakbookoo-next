import { BiPlus } from 'react-icons/bi'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import LibraryViewToggle from '@/components/library/LibraryViewToggle'
import Link from 'next/link'
import React from 'react'
import ShelfComponent from '@/components/library/Shelves/Shelf'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'
import { routes } from '@/lib/routes'

const ShelvesPage = async () => {
  const { data: sessionData } = await getUserId()
  const shelves = await prisma.shelf
    .findMany({
      select: {
        id: true,
        name: true,
        Book: {
          take: 4,
          select: {
            id: true,
            coverImage: true,
            title: true,
          },
        },
      },
      where: { userUid: sessionData.session?.user.id },
    })
    .catch((res) => console.error(res))

  return (
    <>
      <div className="flex w-full justify-between">
        <Breadcrumbs /> <LibraryViewToggle />
      </div>
      <div className="flex w-full justify-between">
        <h1 className="text-h1 mb-8">Rak Saya</h1>
        <Link href={routes.newShelf} className="btn mt-4 gap-2 pl-2">
          <BiPlus className="h-6 w-6" />
          Rak Baru
        </Link>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shelves?.map((shelf) => (
          <ShelfComponent key={shelf.id} shelf={shelf} />
        ))}
      </div>
    </>
  )
}

export default ShelvesPage
