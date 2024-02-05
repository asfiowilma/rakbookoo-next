import React, { PropsWithChildren, ReactNode } from 'react'

import { BiPlus } from 'react-icons/bi'
import Breadcrumbs from '@/components/library/Breadcrumbs'
import LibraryViewToggle from '@/components/library/LibraryViewToggle'
import Link from 'next/link'
import { routes } from '@/lib/routes'

type BooksLayoutProps = {
  modal: ReactNode
} & PropsWithChildren

const BooksLayout = ({ modal, children }: BooksLayoutProps) => {
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
      {children}
      {modal}
    </>
  )
}

export default BooksLayout
