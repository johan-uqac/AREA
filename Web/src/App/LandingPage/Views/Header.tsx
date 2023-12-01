import React from 'react'

const ConnectButtons = () => (
  <div className='inline-flex items-center ml-5 space-x-6 lg:justify-end'>
    <a
      href='./auth/login'
      className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-slate-900 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900'
    >
      Connectes-toi
    </a>
    <a
      href='./auth/subscribe'
      className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-600 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-teal-600'
    >
      Inscris-toi
    </a>
  </div>
)

export default function Header() {
  return (
    <header className='w-full px-8 text-gray-700 bg-white'>
      <div className='container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
        <div className='relative flex flex-col md:flex-row'>
          <span className='flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0'>
            <span className='mx-auto text-xl font-black leading-none text-gray-900 select-none'>
              A<span className='text-teal-600'>REA</span>
            </span>
          </span>
        </div>
        <ConnectButtons />
      </div>
    </header>
  )
}
