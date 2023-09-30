import { BiBookHeart } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import RegisterForm from '@/components/auth/RegisterForm'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const RegisterPage = async () => {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) redirect('/')

  return (
    <>
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
            Sudah punya akun?{' '}
            <Link href="/auth/login" className="link link-hover link-primary">
              Langsung masuk aja~
            </Link>
          </p>
          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default RegisterPage
