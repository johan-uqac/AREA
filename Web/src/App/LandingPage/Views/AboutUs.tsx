import React from 'react'
import CreatorCard from '../../Components/CreatorCard'

const CREATORS = [
  {
    imageLink:
      'https://images.unsplash.com/photo-1619476006517-75d535a84652?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    firstName: 'Gabrielle',
    lastName: 'Walgraef',
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1641761934425-af2fe6a2cc0d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    firstName: 'Mathieu',
    lastName: 'Muty',
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1535062311770-93adb0401917?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    firstName: 'Johan',
    lastName: 'Chrillesen',
  },
]

export default function AboutUs() {
  return (
    <section className='text-gray-700 body-font bg-white'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading text-teal-600'>
            Meet our Team !
          </h2>
          <p className='mb-4 font-medium tracking-tight text-gray-400 xl:mb-6'>
            Meet the dynamic trio from the world of IT. Hailing from diverse backgrounds but united by a shared passion
            for technology
          </p>
        </div>
        <div className='flex flex-wrap -m-2'>
          {CREATORS.map(creator => (
            <CreatorCard
              key={creator.firstName + creator.lastName}
              imageLink={creator.imageLink}
              firstName={creator.firstName}
              lastName={creator.lastName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
