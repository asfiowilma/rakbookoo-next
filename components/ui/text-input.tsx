import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import React, { ReactNode } from 'react'

import { Input } from './input'
import type { UseFormReturn } from 'react-hook-form'
import { cn } from '@/lib/utils'

export interface TextInputProps {
  form: UseFormReturn<any>
  name: string
  type?: string
  label?: string
  className?: string
  placeholder?: string
  leftAdornment?: ReactNode
  rightAdornment?: ReactNode
}

export const TextInput = ({
  form,
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
      control={form.control}
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
