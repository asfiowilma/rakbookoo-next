'use client'

import * as z from 'zod'

import React, { useState } from 'react'

import { Button } from '../ui/button'
import type { Database } from '@/types/database'
import { Form } from '../ui/form'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { PasswordInput } from '../ui/password-input'
import { TextInput } from '../ui/text-input'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Harap masukkan email yang valid' }),
  password: z.string(),
})

const LoginForm = () => {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true)
    const response = await supabase.auth.signInWithPassword(data)
    if (response?.error) {
      toast.error('Email atau password tidak valid')
    } else {
      toast.success('Berhasil login!')
      router.push('/')
    }
    setIsLoading(false)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="form-control w-full max-w-md gap-3"
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

          <div className="self-end text-sm">
            <Link href="/auth/forgot-password" className="link link-hover">
              Lupa password?
            </Link>
          </div>
        </form>
      </Form>
      {/* <ThirdPartyProvider {...{ loading }} /> */}
    </>
  )
}

export default LoginForm
