import Link from 'next/link'
import React from 'react'
import UserActionButton from './UserActionButton'

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3">
      <div className="flex md:flex-row sm:flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-5xl text-white">HOSE</Link>
        <UserActionButton />
      </div>
    </header>
  )
}

export default Navbar