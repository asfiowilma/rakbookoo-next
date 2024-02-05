'use client'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React, { useEffect, useState } from 'react'
import {
  isShowAuthor,
  isShowCoverImage,
  isShowRating,
  isShowTags,
} from '@/lib/signals/view'

import { Button } from '@/components/ui/button'
import { FaEllipsisV } from 'react-icons/fa'
import { batch } from 'signals-react-safe'
import { useDebounce } from '@uidotdev/usehooks'
import { useQueryClient } from '@tanstack/react-query'

const OPTIONS = [
  { label: 'Penulis', id: 0b100 },
  { label: 'Cover', id: 0b1000 },
  { label: 'Rating', id: 0b10 },
  { label: 'Tags', id: 0b1 },
]

const BooksViewOptions = () => {
  const [options, setOptions] = useState(0b0)
  const debouncedOptions = useDebounce(options, 500)
  const queryClient = useQueryClient()

  useEffect(() => {
    let initOption = 0b0
    if (isShowAuthor.value) initOption += OPTIONS[0].id
    if (isShowCoverImage.value) initOption += OPTIONS[1].id
    if (isShowRating.value) initOption += OPTIONS[2].id
    if (isShowTags.value) initOption += OPTIONS[3].id
    setOptions(initOption)
  }, [])

  useEffect(() => {
    batch(() => {
      isShowAuthor.value = (options & OPTIONS[0].id) == OPTIONS[0].id
      isShowCoverImage.value = (options & OPTIONS[1].id) == OPTIONS[1].id
      isShowRating.value = (options & OPTIONS[2].id) == OPTIONS[2].id
      isShowTags.value = (options & OPTIONS[3].id) == OPTIONS[3].id
    })
    queryClient.refetchQueries(['books'])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedOptions])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" shape="square" variant="ghost">
          <FaEllipsisV className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Tampilan</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true} disabled>
          Judul Buku
        </DropdownMenuCheckboxItem>
        {OPTIONS.map(({ label, id }) => (
          <DropdownMenuCheckboxItem
            key={id}
            checked={(options & id) == id}
            onCheckedChange={(_) => setOptions((prev) => prev ^ id)}
            onSelect={(e) => e.preventDefault()}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BooksViewOptions
