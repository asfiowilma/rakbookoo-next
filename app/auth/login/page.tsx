import { BiBookHeart } from 'react-icons/bi'
import Link from 'next/link'
import LoginForm from '@/components/auth/LoginForm'
import React from 'react'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const LoginPage = async () => {
  const supabase = createServerComponentClient({ cookies })

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
        <div className="mt-8 flex w-full flex-col items-center text-center">
          <p>
            Belum punya akun?{' '}
            <Link
              href="/auth/register"
              className="link link-hover link-primary"
            >
              Daftar di sini~
            </Link>
          </p>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
