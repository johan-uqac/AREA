import React from 'react'
import Button from '../../Components/Button'

export default function Discover() {
  return (
    <section className='px-2 py-32 bg-white md:px-0'>
      <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
        <div className='flex flex-wrap items-center sm:-mx-3'>
          <div className='w-full md:w-1/2 md:px-3'>
            <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                <span className='block xl:inline'>Inscris toi et découvres comment </span>
                <span className='block text-teal-600 xl:inline'>automatiser</span>
              </h1>
              <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                Notre plateforme intuitive te permet de connecter tes applications favorites, donnant vie à des flux de
                travail fluides et efficaces.
              </p>
              <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                <Button
                  onClick={() => {
                    window.location.href = 'https://fr.wikipedia.org/wiki/Zapier'
                  }}
                  type='primary'
                >
                  <span>En savoir plus</span>
                </Button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'>
              <img
                src='https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='computer'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
