import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import NotFound from './not-found.svg'
import React from 'react'
import SpeedDial from '@/components/library/SpeedDial'
import { routes } from '@/lib/routes'

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh_-_2rem)] flex flex-col">
      <Navbar />
      <main className="mx-auto w-full px-6 pt-4 pb-16 lg:max-w-screen-lg xl:max-w-screen-xl flex-1 flex items-stretch">
        <div className="w-full bg-base-300 rounded-box flex items-center justify-center p-12 flex-col gap-6 text-center">
          <div className="text-primary max-w-sm">
            <NotFound className="w-full h-full" />
          </div>
          <div className="text-h2">Apakah kamu tersesat?</div>
          <p className="prose">
            Hm, sepertinya halaman yang kamu cari hilang entah ke mana.
            <br />
            Kembali ke beranda untuk memulai petualangan baru.
          </p>
          <Button asChild>
            <Link href={routes.books}>Kembali</Link>
          </Button>
        </div>
      </main>
      <SpeedDial />
    </div>
  )
}

export default NotFoundPage
