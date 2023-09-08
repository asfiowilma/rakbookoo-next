'use client'

import { HiTable, HiViewGrid } from 'react-icons/hi'
import React, { useEffect } from 'react'
import { cn, urlBuilder } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '../ui/button'
import { LibraryView } from '@/lib/enums'
import { MdViewList } from 'react-icons/md'
import { useLibraryView } from '@/lib/hooks/useLibraryView'
import { views as viewButtons } from '@/lib/constants/libraryViews'

const LibraryViewSelect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { view, setView } = useLibraryView()

  useEffect(() => {
    if (view) {
      router.replace(urlBuilder(pathname, { view }))
    }
  }, [view])

  return (
    <div className="join">
      {viewButtons.map((button) => (
        <Button
          size="sm"
          shape="square"
          state={view === button.view ? 'active' : 'default'}
          className={cn('join-item')}
          title={button.view}
          onClick={() => setView(button.view)}
        >
          <button.icon className="h-5 w-5" />
        </Button>
      ))}
    </div>
  )
}

export default LibraryViewSelect
