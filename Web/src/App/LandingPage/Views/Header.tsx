import React from 'react'
import Button from '../../Components/Button'

const ConnectButtons = () => (
  <div className='inline-flex items-center ml-5 space-x-6 lg:justify-end'>
    <Button
      onClick={() => {
        window.location.href = './auth/login'
      }}
      type='secondary'
    >
      <span>Connectes-toi</span>
    </Button>
    <Button
      onClick={() => {
        window.location.href = './auth/subscribe'
      }}
      type='primary'
    >
      <span>Inscris-toi</span>
    </Button>
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
