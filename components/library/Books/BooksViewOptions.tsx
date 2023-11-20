'use client'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  isShowAuthor,
  isShowCoverImage,
  isShowRating,
  isShowTags,
} from '@/lib/signals/view'

import { Button } from '@/components/ui/button'
import { FaEllipsisV } from 'react-icons/fa'
import React from 'react'
import { useQueryClient } from '@tanstack/react-query'

const BooksViewOptions = () => {
  const queryClient = useQueryClient()

  const options = {
    author: { label: 'Penulis', checked: isShowAuthor },
    cover: {
      label: 'Cover',
      checked: isShowCoverImage,
    },
    rating: { label: 'Rating', checked: isShowRating },
    tags: { label: 'Tags', checked: isShowTags },
  }

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
        {Object.entries(options).map(([key, option]) => (
          <DropdownMenuCheckboxItem
            key={key}
            checked={option.checked.value}
            onCheckedChange={(value) => {
              option.checked.value = value
              queryClient.refetchQueries({ queryKey: ['books'] })
            }}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BooksViewOptions
