'use client'

import type { BookWithAuthorAndTag, BooksViewProps } from '@/types/books'
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
import {
  isShowAuthor,
  isShowCoverImage,
  isShowRating,
  isShowTags,
} from '@/lib/signals/view'
import { useComputedValue, useSignalEffect } from 'signals-react-safe'

import { BiBookHeart } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'
import { routes } from '@/lib/routes'
import { useRouter } from 'next/navigation'

const columnHelper = createColumnHelper<BookWithAuthorAndTag>()

const columns = {
  coverImage: columnHelper.accessor('coverImage', {
    header: () => <div className="text-center">Cover</div>,
    cell: (props) =>
      !!props.getValue() ? (
        <Image
          width={5 * 10}
          height={8 * 10}
          src={props.getValue() ?? ''}
          alt="Cover"
          className="flex-none aspect-[5/8] w-8 h-auto rounded-md bg-base-300 object-cover mx-auto"
        />
      ) : (
        <div className="flex flex-none aspect-[5/8] w-8 flex-col items-center justify-center rounded-md bg-neutral text-center text-neutral-content shadow mx-auto">
          <BiBookHeart />
        </div>
      ),
  }),
  title: columnHelper.accessor('title', {
    header: () => 'Judul Buku',
    cell: (props) => <span className="font-medium">{props.getValue()}</span>,
  }),
  authors: columnHelper.accessor('authors', {
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
  tags: columnHelper.accessor('tags', {
    header: () => 'Tags',
    cell: (props) => (
      <div className="mt-4 flex flex-wrap gap-2">
        {props.getValue()?.map((tag) => (
          <div key={tag.id} className="badge badge-neutral">
            {tag.name}
          </div>
        ))}
      </div>
    ),
  }),
  rating: columnHelper.accessor('rating', {
    header: () => 'Rating',
    cell: (props) => (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-lg ${
              i < props.getValue() ? 'text-neutral-content' : 'text-neutral'
            }`}
          />
        ))}
      </div>
    ),
  }),
}

const BookTable = ({ books }: BooksViewProps) => {
  console.log('🚀 ~ file: BookTable.tsx:98 ~ BookTable ~ books:', books)
  const router = useRouter()
  const filteredColumns = useComputedValue(() => {
    const columns_ = []
    if (isShowCoverImage.value) columns_.push(columns.coverImage)
    columns_.push(columns.title)
    if (isShowAuthor.value) columns_.push(columns.authors)
    if (isShowRating.value) columns_.push(columns.rating)
    if (isShowTags.value) columns_.push(columns.tags)
    return columns_
  })

  const table = useReactTable({
    data: books,
    columns: filteredColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  useSignalEffect(() => {
    table.setOptions({
      ...table.options,
      columns: filteredColumns,
    })
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
          <TableRow
            key={row.id}
            onClick={() => router.push(routes.book(row.original.id))}
          >
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
