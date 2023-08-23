import { BiPlus } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import { routes } from '@/lib/routes'

type Props = {}

const SpeedDial = (props: Props) => {
  return (
    <div className=" fixed bottom-6 right-6">
      <div className="dropdown-end dropdown dropdown-top">
        <label tabIndex={0}>
          <button className="btn btn-primary btn-circle">
            <BiPlus className="h-6 w-6" />
          </button>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-48 bg-base-200 p-2 shadow"
        >
          <li>
            <Link href={routes.newShelf}>
              <BiPlus className="h-5 w-5" />
              Rak Baru
            </Link>
          </li>
          <li>
            <Link href={routes.newBook}>
              <BiPlus className="h-5 w-5" />
              Buku Baru
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SpeedDial
