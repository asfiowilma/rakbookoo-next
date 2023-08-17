import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { BiBookHeart } from 'react-icons/bi'
import { ImInfo } from 'react-icons/im'
import Link from 'next/link'
import LoginForm from '@/components/auth/LoginForm'
import React from 'react'
import ResendEmail from '@/components/auth/ResendEmail'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const LoginPage = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) => {
  const supabase = createServerComponentClient({ cookies })
  const isShowAlertVerifyEmail =
    (searchParams?.['require-email-verification'] as string) === 'true'
  const email = searchParams?.['email'] as string

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) redirect('/')

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-sm flex-col justify-center py-16">
      <header>
        <h1 className="text-h1 text-center">
          Selamat Datang di
          <span className="inline-block">
            <BiBookHeart className="inline" />
            Rakbookoo!
          </span>
        </h1>
      </header>

      <div className="flex flex-col gap-3">
        <div className="mt-8 flex w-full flex-col gap-4 items-center text-center">
          <p>
            Belum punya akun?{' '}
            <Link
              href="/auth/register"
              className="link link-hover link-primary"
            >
              Daftar di sini~
            </Link>
          </p>
          {isShowAlertVerifyEmail && (
            <Alert className="max-w-md">
              <ImInfo className="h-5 w-5 text-info" />
              <div>
                <AlertTitle>Kamu berhasil mendaftar!</AlertTitle>
                <AlertDescription>
                  Silakan cek email kamu untuk verifikasi akun supaya bisa login
                  ke Rakbookoo~
                  {email && <ResendEmail email={email} />}
                </AlertDescription>
              </div>
            </Alert>
          )}
          <LoginForm />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
