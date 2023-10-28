import { BiPlus } from 'react-icons/bi'
import BookGrid from './BookGrid'
import BookList from './BookList'
import BookTable from './BookTable'
import type { BooksViewProps } from '@/types/books'
import { Button } from '@/components/ui/button'
import EmptyLibrary from '../assets/empty-library.svg'
import { LibraryView } from '@/lib/enums'
import Link from 'next/link'
import React from 'react'
import { routes } from '@/lib/routes'

const BooksView = ({ view, books }: BooksViewProps) => {
  if (books.length == 0)
    return (
      <div className="w-full bg-base-300 rounded-box flex items-center justify-center p-12 flex-col text-center">
        <div className="text-primary object-contain w-48">
          <EmptyLibrary className="w-full h-full" />
        </div>
        <div className="text-h4 mt-6">Perpustakaanmu masih kosong, nih.</div>
        <p className="prose mb-4">Yuk, tambahkan buku kesukaanmu sekarang!</p>
        <Button variant="secondary" asChild>
          <Link href={routes.newBook}>
            <BiPlus className="h-6 w-6" /> Buku Baru
          </Link>
        </Button>
      </div>
    )
  switch (view) {
    case LibraryView.list:
      return <BookList books={books} />
    case LibraryView.table:
      return <BookTable books={books} />
    case LibraryView.thumbnail:
      return <BookGrid books={books} />
  }
}

export default BooksView
