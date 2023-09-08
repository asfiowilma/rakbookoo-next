'use client'

import { BookWithAuthor, BooksViewProps } from './BooksView'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { BiBookHeart } from 'react-icons/bi'
import React from 'react'

const columnHelper = createColumnHelper<BookWithAuthor>()

const columns = [
  columnHelper.accessor('coverImage', {
    header: () => <div className="text-center">Cover</div>,
    cell: (props) =>
      !!props.getValue() ? (
        <img
          src={props.getValue() ?? ''}
          alt="Cover"
          className="flex-none aspect-[5/8] w-8 rounded-md bg-base-300 object-cover mx-auto"
        />
      ) : (
        <div className="flex flex-none aspect-[5/8] w-8 flex-col items-center justify-center rounded-md bg-neutral text-center text-neutral-content shadow mx-auto">
          <BiBookHeart />
        </div>
      ),
  }),
  columnHelper.accessor('title', {
    header: () => 'Judul Buku',
    cell: (props) => <span className="font-medium">{props.getValue()}</span>,
  }),
  columnHelper.accessor('Author', {
    header: () => 'Penulis',
    cell: (props) => (
      <>
        {props
          .getValue()
          .map((author) => author.name)
          .join(', ')}
      </>
    ),
  }),
]

const BookTable = ({ books }: Pick<BooksViewProps, 'books'>) => {
  const table = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default BookTable
