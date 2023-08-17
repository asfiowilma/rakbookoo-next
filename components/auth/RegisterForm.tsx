'use client'

import * as z from 'zod'

import React, { useState } from 'react'

import { Button } from '../ui/button'
import type { Database } from '@/types/database'
import { FaUserCircle } from 'react-icons/fa'
import { Form } from '../ui/form'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { PasswordInput } from '../ui/password-input'
import { TextInput } from '../ui/text-input'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-hot-toast'
import { urlBuilder } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Harap masukkan email yang valid' }),
  username: z
    .string()
    .min(2, {
      message: 'Username terlalu pendek, harap masukkan minimal 2 karakter.',
    })
    .max(20, {
      message: 'Username terlalu panjang, harap masukkan maksimal 20 karakter',
    })
    .trim(),
  password: z.string().max(72, {
    message: 'Password terlalu panjang, harap masukkan maksimal 72 karakter.',
  }),
})

const RegisterForm = () => {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true)
    const { email, password, username } = data
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })

    if (response?.error) {
      toast.error('Email atau password tidak valid')
    } else {
      toast.success('Berhasil mendaftar!')
      router.push(
        urlBuilder('/auth/login', {
          'require-email-verification': true,
          email,
        })
      )
    }
    setIsLoading(false)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="form-control mt-3 w-full max-w-md gap-3"
        >
          <TextInput
            form={form}
            name="email"
            placeholder="Masukkan email"
            leftAdornment={
              <span>
                <MdEmail />
              </span>
            }
          />
          <TextInput
            form={form}
            name="username"
            placeholder="Masukkan username"
            leftAdornment={
              <span>
                <FaUserCircle />
              </span>
            }
          />
          <PasswordInput
            form={form}
            name="password"
            placeholder="Masukkan password"
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loading loading-spinner"></span>
                Loading...
              </>
            ) : (
              'masuk'
            )}
          </Button>
        </form>
      </Form>
      {/* <ThirdPartyProvider {...{ loading }} /> */}
    </>
  )
}

export default RegisterForm
