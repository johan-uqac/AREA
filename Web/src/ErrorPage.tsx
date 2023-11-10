// Error404.js
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-2xl text-gray-600 mb-8'>Page not found</p>
      <Link
        to='/'
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      >
        Go back to Home
      </Link>
    </div>
  )
}
