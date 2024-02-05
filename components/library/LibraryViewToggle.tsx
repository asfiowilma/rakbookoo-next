'use client'

import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { routes } from '@/lib/routes'
import { usePathname } from 'next/navigation'

const LibraryViewToggle = () => {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2">
      <span>Tampilkan</span>
      <div className="tabs tabs-boxed">
        <Link
          key="SHELVES-TAB"
          href={routes.shelves}
          replace
          className={cn('tab transition', {
            'tab-active': pathname === routes.shelves,
          })}
        >
          Rak
        </Link>
        <Link
          key="BOOKS-TAB"
          href={routes.books}
          replace
          className={cn('tab transition', {
            'tab-active': pathname === routes.books,
          })}
        >
          Buku
        </Link>
      </div>
    </div>
  )
}

export default LibraryViewToggle
