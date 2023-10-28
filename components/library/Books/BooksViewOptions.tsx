'use client'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaEllipsisH, FaEllipsisV } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useBooksViewOptionsStore } from '@/lib/hooks/useBooksViewOption'
import { useQueryClient } from '@tanstack/react-query'

const BooksViewOptions = () => {
  const {
    showAuthor,
    setShowAuthor,
    showCoverImage,
    setShowCoverImage,
    showRating,
    setShowRating,
    showTags,
    setShowTags,
  } = useBooksViewOptionsStore()
  const queryClient = useQueryClient()

  const options = {
    author: { label: 'Penulis', checked: showAuthor, onChange: setShowAuthor },
    cover: {
      label: 'Cover',
      checked: showCoverImage,
      onChange: setShowCoverImage,
    },
    rating: { label: 'Rating', checked: showRating, onChange: setShowRating },
    tags: { label: 'Tags', checked: showTags, onChange: setShowTags },
  }

  const onCheckedChange = (
    checked: boolean,
    onChange: (to: boolean) => void
  ) => {
    onChange(checked)
    queryClient.refetchQueries({ queryKey: ['books'] })
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
            checked={option.checked}
            onCheckedChange={(checked) =>
              onCheckedChange(checked, option.onChange)
            }
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BooksViewOptions
