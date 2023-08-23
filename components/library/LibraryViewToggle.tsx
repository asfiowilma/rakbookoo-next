'use client'

import { usePathname, useRouter } from 'next/navigation'

import React from 'react'
import { cn } from '@/lib/utils'
import { routes } from '@/lib/routes'

export const dynamic = 'force-dynamic'

const LibraryViewToggle = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2">
      <span>Tampilkan</span>
      <div className="tabs tabs-boxed">
        <div
          key="SHELVES-TAB"
          onClick={() => router.replace(routes.shelves)}
          className={cn('tab transition', {
            'tab-active': pathname === routes.shelves,
          })}
        >
          Rak
        </div>
        <div
          key="BOOKS-TAB"
          onClick={() => router.replace(routes.books)}
          className={cn('tab transition', {
            'tab-active': pathname === routes.books,
          })}
        >
          Buku
        </div>
      </div>
    </div>
  )
}

export default LibraryViewToggle
