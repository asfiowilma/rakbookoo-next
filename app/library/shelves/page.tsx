import { BiPlus } from 'react-icons/bi'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import LibraryViewToggle from '@/components/library/LibraryViewToggle'
import Link from 'next/link'
import React from 'react'
import ShelvesView from '@/components/library/Shelves/ShelvesView'
import { routes } from '@/lib/routes'

export const dynamic = 'force-dynamic'

const ShelvesPage = async () => {
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
      <ShelvesView />
    </>
  )
}

export default ShelvesPage
