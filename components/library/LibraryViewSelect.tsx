'use client'

import React, { useEffect } from 'react'
import { cn, urlBuilder } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../ui/button'
import { LibraryView } from '@/lib/enums'
import { libraryView } from '@/lib/signals/view'
import { queryClient } from '@/context/providers/RakQueryClientProvider'
import { useSignalEffect } from '@preact/signals-react'
import { views as viewButtons } from '@/lib/constants/libraryViews'

const LibraryViewSelect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  useEffect(() => {
    const cachedView = localStorage.getItem('library-view')
    const view =
      (params.get('view') as LibraryView) || cachedView || LibraryView.thumbnail
    if (view !== libraryView.value) {
      libraryView.value = view
    }
  }, [])

  useSignalEffect(() => {
    if ((params.get('view') as LibraryView) !== libraryView.value) {
      // refetch books
      queryClient.invalidateQueries({ queryKey: ['books'] })

      // update query params
      const searchParams = new URLSearchParams(params.toString())
      searchParams.set('view', libraryView.value)
      router.replace(urlBuilder(pathname, searchParams))

      // persist in localstorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('library-view', libraryView.value)
      }
    }
  })

  return (
    <div className="join">
      {viewButtons.map((button) => (
        <Button
          key={button.view}
          size="sm"
          shape="square"
          state={libraryView.value === button.view ? 'active' : 'default'}
          className={cn('join-item')}
          title={button.view}
          onClick={() => (libraryView.value = button.view)}
        >
          <button.icon className="h-5 w-5" />
        </Button>
      ))}
    </div>
  )
}

export default LibraryViewSelect
