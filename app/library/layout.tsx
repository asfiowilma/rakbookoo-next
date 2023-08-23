import Breadcrumbs from '@/components/library/Breadcrumbs'
import LibraryViewToggle from '@/components/library/LibraryViewToggle'
import Navbar from '@/components/Navbar'
import React from 'react'
import SpeedDial from '@/components/library/SpeedDial'

const LibraryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col items-start px-6 pt-4 pb-16 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="flex w-full justify-between">
          <Breadcrumbs /> <LibraryViewToggle />
        </div>
        {children}
      </main>
      <SpeedDial />
    </>
  )
}

export default LibraryLayout
