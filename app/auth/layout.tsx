import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-sm flex-col justify-center py-16">
      {children}
    </main>
  )
}

export default AuthLayout
