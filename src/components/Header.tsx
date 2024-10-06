'use client'

import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">LMS</Link>
        <div>
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header