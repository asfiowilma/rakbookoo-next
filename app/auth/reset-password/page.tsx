import React from 'react'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm'

const ResetPasswordPage = () => {
  return (
    <>
      <header className="text-center ">
        <h1 className="text-h2 pb-2 text-center">Reset Password</h1>
        <p>Masukkan password baru untuk akun kamu.</p>
        <p>Hati-hati jangan lupa lagi ya~</p>
      </header>

      <div className="mt-4 flex w-full flex-col items-center text-center">
        <ResetPasswordForm />
      </div>
    </>
  )
}

export default ResetPasswordPage
