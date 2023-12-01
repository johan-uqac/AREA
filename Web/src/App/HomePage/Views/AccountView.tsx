import React from 'react'
import { AccountType } from '../../../Common/Contexts/AccountContext'

type AccountViewProps = {
  account: AccountType
  toggleModal: () => void
}

const AccountView = ({ account, toggleModal }: AccountViewProps) => (
  <div className='w-full md:w-1/2 md:px-3'>
    <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
      <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex justify-end px-4 pt-4'></div>
          <div className='flex flex-col items-center pb-10'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src='https://images.unsplash.com/photo-1580034283351-073a1906f7ba?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Bonnie '
            />
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>PSEUDO</h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>{account.email}</span>
            <div className='flex mt-4 md:mt-6'>
              <button
                title='Add New'
                className='group cursor-pointer outline-none hover:rotate-90 duration-300'
                onClick={toggleModal}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50px'
                  height='50px'
                  viewBox='0 0 24 24'
                  className='stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300'
                >
                  <path
                    d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                    strokeWidth='1.5'
                  ></path>
                  <path
                    d='M8 12H16'
                    strokeWidth='1.5'
                  ></path>
                  <path
                    d='M12 16V8'
                    strokeWidth='1.5'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AccountView
