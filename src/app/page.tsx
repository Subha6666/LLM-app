import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <Link href="/">LMS</Link>
            </div>
            <div className="space-x-4">
              <Link href="/login" className="text-gray-800 hover:text-gray-600">Login</Link>
              <Link href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Register</Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to our Learning Management System</h1>
        <p className="text-gray-600">Start your learning journey today!</p>
      </main>
    </div>
  )
}