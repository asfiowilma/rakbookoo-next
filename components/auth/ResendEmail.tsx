'use client'

import React, { useEffect, useState } from 'react'

import { Database } from '@/types/database'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { mod } from '@/lib/utils'
import moment from 'moment'
import { toast } from 'react-hot-toast'

const COOLDOWN_EMAIL = 60 * 2

const ResendEmail = ({ email }: { email: string }) => {
  const supabase = createClientComponentClient<Database>()
  const [timeLeft, setTimeLeft] = useState(COOLDOWN_EMAIL)

  useEffect(() => {
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const resendEmail = async () => {
    setTimeLeft(COOLDOWN_EMAIL)
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    })
    if (error) {
      toast.error('Gagal mengirim ulang email')
    } else {
      toast.success('Berhasil. Silakan cek kembali email kamu.')
    }
  }

  return (
    <div className="text-xs pt-3 flex gap-1.5">
      Belum menerima email?{' '}
      {timeLeft ? (
        <span>
          Kirim ulang dalam{' '}
          {moment()
            .minutes(Math.floor(timeLeft / 60))
            .seconds(mod(timeLeft, 60))
            .format('mm:ss')}
        </span>
      ) : (
        <ResendButton resendEmail={resendEmail} />
      )}
    </div>
  )
}

const ResendButton = ({ resendEmail }: { resendEmail: () => void }) => {
  return (
    <div role="button" onClick={resendEmail} className="link link-secondary">
      Kirim ulang
    </div>
  )
}

export default ResendEmail
