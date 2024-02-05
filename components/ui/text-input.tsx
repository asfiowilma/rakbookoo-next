import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import React, { ReactNode } from 'react'

import { Input } from './input'
import { cn } from '@/lib/utils'

export interface TextInputProps {
  name: string
  type?: string
  label?: string
  className?: string
  placeholder?: string
  leftAdornment?: ReactNode
  rightAdornment?: ReactNode
}

export const TextInput = ({
  name,
  label,
  type,
  className,
  leftAdornment,
  rightAdornment,
  placeholder,
}: TextInputProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <div
            className={leftAdornment || rightAdornment ? 'input-group' : 'flex'}
          >
            {leftAdornment}
            <FormControl>
              <Input
                placeholder={placeholder}
                type={type ?? 'text'}
                className={cn('flex-1', className)}
                {...field}
              />
            </FormControl>
            {rightAdornment}
          </div>
          <FormMessage className="text-right" />
        </FormItem>
      )}
    />
  )
}

export default TextInput
