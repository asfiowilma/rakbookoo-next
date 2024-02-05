import Navbar from '@/components/Navbar'
import React from 'react'

// import SpeedDial from '@/components/library/SpeedDial'

const LibraryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col items-start px-6 pt-4 pb-16 lg:max-w-screen-lg xl:max-w-screen-xl">
        {children}
      </main>
      {/* <SpeedDial /> */}
    </>
  )
}

export default LibraryLayout
