import { BiPlus } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import EmptyShelf from '../assets/empty-shelf.svg'
import Link from 'next/link'
import React from 'react'
import ShelfComponent from './Shelf'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'
import { redirect } from 'next/navigation'
import { routes } from '@/lib/routes'
import toast from 'react-hot-toast'

const ShelvesView = async () => {
  const userId = await getUserId()
  if (!userId) {
    toast.error('Kamu perlu login untuk mengakses halaman tersebut')
    redirect(routes.login)
  }

  const shelves = await prisma.shelf.findMany({
    select: {
      id: true,
      name: true,
      books: {
        take: 4,
        select: {
          id: true,
          coverImage: true,
          title: true,
        },
      },
    },
    where: { userUid: userId },
  })

  if (shelves.length === 0)
    return (
      <div className="w-full bg-base-300 rounded-box flex items-center justify-center p-12 flex-col text-center">
        <div className="text-primary object-contain w-48">
          <EmptyShelf className="w-full h-full" />
        </div>
        <div className="text-h4 mt-6">
          Perpustakaanmu terlihat kosong tanpa rak buku.
        </div>
        <p className="prose mb-4">Yuk, buat rak buku pertamamu sekarang!</p>
        <Button variant="secondary" asChild>
          <Link href={routes.newShelf}>
            <BiPlus className="h-6 w-6" /> Rak Baru
          </Link>
        </Button>
      </div>
    )

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {shelves?.map((shelf) => (
        <ShelfComponent key={shelf.id} shelf={shelf} />
      ))}
    </div>
  )
}

export default ShelvesView
