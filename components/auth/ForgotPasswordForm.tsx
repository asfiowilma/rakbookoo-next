'use client'

import * as z from 'zod'

import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import React, { useState } from 'react'

import { Button } from '../ui/button'
import type { Database } from '@/types/database'
import { Form } from '../ui/form'
import { ImInfo } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { TextInput } from '../ui/text-input'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Harap masukkan email yang valid' }),
})

type forgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordForm = () => {
  const supabase = createClientComponentClient<Database>()
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<forgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = async (data: forgotPasswordSchema) => {
    setIsLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${location.origin}/auth/reset-password`,
    })
    if (error) {
      toast.error('Email atau password tidak valid')
    } else {
      toast.success('Email berhasil dikirim!')
      setIsSuccess(true)
    }
    setIsLoading(false)
  }

  return isSuccess ? (
    <Alert className="max-w-md">
      <ImInfo className="h-5 w-5 text-info" />
      <div>
        <AlertTitle>Email untuk reset password telah dikirim!</AlertTitle>
        <AlertDescription>
          <p>Silakan cek email kamu untuk mengatur password baru.</p>
          <p>Kalau tidak ada email masuk, coba cek folder spam juga.</p>
        </AlertDescription>
      </div>
    </Alert>
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="form-control w-full max-w-md gap-3"
      >
        <TextInput
          name="email"
          placeholder="Masukkan email"
          leftAdornment={
            <span>
              <MdEmail />
            </span>
          }
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="loading loading-spinner"></span>
              Loading...
            </>
          ) : (
            'kirim'
          )}
        </Button>
      </form>
    </Form>
  )
}

export default ForgotPasswordForm
