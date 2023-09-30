'use client'
import { routes } from '@/lib/routes'
import { Shelf, type Book } from '@prisma/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Breadcrumbs = ({ book, shelf }: { book?: Book; shelf?: Shelf }) => {
  // TODO: add book store
  const pathname = usePathname()

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={routes.books} className="link link-hover">
            Rakbookoo
          </Link>
        </li>
        {pathname === routes.books && <li>Buku Saya</li>}
        {shelf && (
          <li>
            <Link href={routes.shelf(shelf?.id)}>{shelf?.name}</Link>
          </li>
        )}
        {book && (
          <li>
            <Link href={routes.book(book.id)}>{book.title}</Link>
          </li>
        )}
        {pathname === routes.newBook && <li>Tambah Buku Baru</li>}
        {pathname === routes.newShelf && <li>Tambah Rak Baru</li>}
        {pathname.endsWith('edit') && <li>Edit</li>}
      </ul>
    </div>
  )
}

export default Breadcrumbs
