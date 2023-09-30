import { FaEye, FaEyeSlash, FaUnlock } from 'react-icons/fa'
import React, { useState } from 'react'

import { Button } from './button'
import TextInput, { type TextInputProps } from './text-input'

export const PasswordInput = ({ form, name, placeholder }: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <TextInput
      form={form}
      placeholder={placeholder}
      name={name}
      type={showPassword ? 'text' : 'password'}
      className="border-r-0"
      leftAdornment={
        <span>
          <FaUnlock />
        </span>
      }
      rightAdornment={
        <Button
          type="button"
          title={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-square btn-ghost border border-l-0 border-base-content border-opacity-20"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </Button>
      }
    />
  )
}
