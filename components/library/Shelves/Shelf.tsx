import { routes } from '@/lib/routes'
import { truncate } from '@/lib/utils'
import { Book, type Shelf } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { BiBookHeart } from 'react-icons/bi'
import { FaEllipsisV, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { Avatar, AvatarFallback } from '../../ui/avatar'

interface ShelfWithBooks extends Omit<Shelf, 'userUid'> {
  Book: Pick<Book, 'id' | 'title' | 'coverImage'>[]
}

type ShelfProps = { shelf: ShelfWithBooks }

const ShelfComponent = ({ shelf }: ShelfProps) => {
  return (
    <div
      title={'Buka rak ' + shelf.name}
      className="rounded-box flex gap-3 overflow-visible bg-base-200 p-3"
      key={shelf.id}
    >
      <Link href={routes.shelf(shelf.id)}>
        <Avatar>
          <AvatarFallback className="mask mask-squircle" size={72}>
            {shelf.name}
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="relative flex-1 space-y-2">
        <div className="flex items-baseline justify-between gap-2">
          <Link href={routes.shelf(shelf.id)} className="flex-1">
            {truncate(shelf.name)}
          </Link>
          <div className="dropdown-bottom dropdown-end dropdown flex-none">
            <label tabIndex={0} className="btn btn-square btn-ghost btn-sm">
              <FaEllipsisV />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-40 bg-base-300 p-2 shadow"
            >
              <li>
                <Link
                  href={routes.editShelf(shelf.id)}
                  title={'Edit shelf ' + shelf.name}
                >
                  <FaPencilAlt />
                  Edit Rak
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  title={'Hapus rak ' + shelf.name}
                  // onClick={() => onDeleteClick(shelf.id)}
                  className="text-error"
                >
                  <FaTrash />
                  Hapus Rak
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -bottom-6 mx-auto grid w-48 grid-cols-4 grid-rows-1 gap-3 lg:-bottom-8 lg:w-full xl:w-3/4">
          {shelf.Book.map((book, idx) =>
            book.coverImage ? (
              <img
                src={book.coverImage}
                alt={book.title}
                key={idx}
                className="aspect-[5/8] w-full rounded-md bg-neutral shadow"
              />
            ) : (
              <div
                key={idx}
                className="grid aspect-[5/8] w-full place-items-center rounded-md bg-neutral text-neutral-content shadow"
              >
                <BiBookHeart className="h-5 w-5" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default ShelfComponent
