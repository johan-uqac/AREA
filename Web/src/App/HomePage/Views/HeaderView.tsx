import React from 'react'
import Button from '../../Components/Button'

type HeaderViewProps = {
  logOut: () => void
}

const HeaderView = ({ logOut }: HeaderViewProps) => (
  <header className='w-full px-8 text-gray-700 bg-white'>
    <div className='container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
      <div className='relative flex flex-col md:flex-row'>
        <a
          href='#_'
          className='flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0'
        >
          <span className='mx-auto text-xl font-black leading-none text-gray-900 select-none'>
            A<span className='text-teal-600'>REA</span>
          </span>
        </a>
      </div>
      <div className='inline-flex items-center ml-5 space-x-6 lg:justify-end'>
        <Button
          onClick={logOut}
          type='secondary'
        >
          <span>Se déconnecter</span>
        </Button>
      </div>
    </div>
  </header>
)

export default HeaderView
