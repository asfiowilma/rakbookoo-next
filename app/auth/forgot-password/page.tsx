import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import Link from 'next/link'
import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <>
      <header>
        <h1 className="text-h2 text-center">Lupa password?</h1>{' '}
        <p className="mx-auto max-w-md py-2 text-center">
          Jangan khawatir. Masukkan email kamu di bawah, kami akan kirimkan link
          untuk mengatur ulang password kamu~
        </p>
      </header>

      <div className="mt-6 gap-4 flex w-full flex-col items-center text-center">
        <div>
          Belum punya akun?{' '}
          <Link href="/auth/register" className="link link-hover link-primary">
            Daftar di sini~
          </Link>
        </div>
        <ForgotPasswordForm />
      </div>
    </>
  )
}

export default ForgotPasswordPage
