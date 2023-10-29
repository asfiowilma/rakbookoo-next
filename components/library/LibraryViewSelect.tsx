'use client'

import React, { useEffect } from 'react'
import { cn, urlBuilder } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../ui/button'
import { LibraryView } from '@/lib/enums'
import { useLibraryView } from '@/lib/hooks/useLibraryView'
import { useQueryClient } from '@tanstack/react-query'
import { views as viewButtons } from '@/lib/constants/libraryViews'

const LibraryViewSelect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const { view, setView } = useLibraryView()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (view && (params.get('view') as LibraryView) !== view) {
      const searchParams = new URLSearchParams(params.toString())
      searchParams.set('view', view)
      router.replace(urlBuilder(pathname, searchParams))
      queryClient.invalidateQueries({ queryKey: ['books'] })
    }
  }, [view])

  return (
    <div className="join">
      {viewButtons.map((button) => (
        <Button
          key={button.view}
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
