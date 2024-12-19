import Link from 'next/link'
import React from 'react'
import UserActionButton from './UserActionButton'

const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="flex md:flex-row sm:flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-5xl text-third">HOSE</Link>
        <UserActionButton />
      </div>
    </header>
  )
}

export default Navbar