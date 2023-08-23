import { BiPlus } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import { routes } from '@/lib/routes'

const ShelvesPage = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-h1 mb-8">Rak Saya</h1>
        <Link href={routes.newShelf} className="btn mt-4 gap-2 pl-2">
          <BiPlus className="h-6 w-6" />
          Rak Baru
        </Link>
      </div>
    </>
  )
}

export default ShelvesPage
