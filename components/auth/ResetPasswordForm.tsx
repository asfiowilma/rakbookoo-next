'use client'

import * as z from 'zod'

import React, { useEffect, useState } from 'react'

import { Button } from '../ui/button'
import type { Database } from '@/types/database'
import { Form } from '../ui/form'
import { MdEmail } from 'react-icons/md'
import { PasswordInput } from '../ui/password-input'
import { TextInput } from '../ui/text-input'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

const forgotPasswordSchema = z.object({
  password: z.string().max(72, {
    message: 'Password terlalu panjang, harap masukkan maksimal 72 karakter.',
  }),
})

const ResetPasswordForm = () => {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { password: '' },
  })

  const onSubmit = async ({
    password,
  }: z.infer<typeof forgotPasswordSchema>) => {
    setIsLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      toast.error(
        'Terjadi kesalahan saat mereset password, harap coba sesaat lagi.'
      )
    } else {
      toast.success('Berhasil mengupdate password~')
      router.push('/')
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="form-control w-full max-w-md gap-3"
      >
        <PasswordInput
          form={form}
          name="password"
          placeholder="Masukkan password baru"
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

export default ResetPasswordForm
