'use client'

import { Auth } from '@supabase/auth-ui-react'
import { BiBookHeart } from 'react-icons/bi'
import React from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const LoginPage = () => (
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
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={['google', 'discord']}
      />
    </div>
  </main>
)

export default LoginPage
