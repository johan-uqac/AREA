import React from 'react'
import HowListItem from '../../Components/HowListItem'

const LIST_ITEMS = [
  {
    text: 'Une inscription rapide et facile',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='28'
        width='28'
        viewBox='0 0 448 512'
      >
        <path d='M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z' />
      </svg>
    ),
  },
  {
    text: 'Choisis tes applications',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='28'
        width='28'
        viewBox='0 0 448 512'
      >
        <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
      </svg>
    ),
  },
  {
    text: 'Construits tes automatisations',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='28'
        width='28'
        viewBox='0 0 512 512'
      >
        <path d='M464 6.1c9.5-8.5 24-8.1 33 .9l8 8c9 9 9.4 23.5 .9 33l-85.8 95.9c-2.6 2.9-4.1 6.7-4.1 10.7V176c0 8.8-7.2 16-16 16H384.2c-4.6 0-8.9 1.9-11.9 5.3L100.7 500.9C94.3 508 85.3 512 75.8 512c-8.8 0-17.3-3.5-23.5-9.8L9.7 459.7C3.5 453.4 0 445 0 436.2c0-9.5 4-18.5 11.1-24.8l111.6-99.8c3.4-3 5.3-7.4 5.3-11.9V272c0-8.8 7.2-16 16-16h34.6c3.9 0 7.7-1.5 10.7-4.1L464 6.1zM432 288c3.6 0 6.7 2.4 7.7 5.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8zM87.7 69.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8L87.7 218.2c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8L57.5 166.5 5.8 151.7c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8L72.3 69.8c1-3.4 4.1-5.8 7.7-5.8s6.7 2.4 7.7 5.8zM208 0c3.7 0 6.9 2.5 7.8 6.1l6.8 27.3 27.3 6.8c3.6 .9 6.1 4.1 6.1 7.8s-2.5 6.9-6.1 7.8l-27.3 6.8-6.8 27.3c-.9 3.6-4.1 6.1-7.8 6.1s-6.9-2.5-7.8-6.1l-6.8-27.3-27.3-6.8c-3.6-.9-6.1-4.1-6.1-7.8s2.5-6.9 6.1-7.8l27.3-6.8 6.8-27.3c.9-3.6 4.1-6.1 7.8-6.1z' />
      </svg>
    ),
  },
  {
    text: 'Lances et optimises',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='28'
        width='28'
        viewBox='0 0 512 512'
      >
        <path d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z' />
      </svg>
    ),
  },
]

export default function Description() {
  return (
    <section className='py-20 bg-white'>
      <div className='container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16'>
        <div className='flex flex-wrap items-center -mx-3'>
          <div className='order-1 w-full px-3 lg:w-1/2 lg:order-0'>
            <div className='w-full lg:max-w-md'>
              <h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading'>
                Comment ça marche ?
              </h2>
              <p className='mb-4 font-medium tracking-tight text-gray-400 xl:mb-6'>
                Ça n&apos;a jamais été aussi facile de libérer ton équipe des tâches chronophages pour se concentrer sur
                l&apos;innovation et la croissance :{' '}
              </p>
              <ul>
                {LIST_ITEMS.map(item => (
                  <HowListItem
                    key={item.text}
                    text={item.text}
                  >
                    {item.svg}
                  </HowListItem>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0'>
            <img
              className='mx-auto sm:max-w-sm lg:max-w-full'
              src='https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='robot hand'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
