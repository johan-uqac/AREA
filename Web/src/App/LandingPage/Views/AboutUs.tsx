import React from 'react'
import CreatorCard from '../../Components/CreatorCard'

const CREATORS = [
  {
    imageLink: require('../../../assets/gab.png'),
    firstName: 'Gabrielle',
    lastName: 'Walgraef',
  },
  {
    imageLink: require('../../../assets/matt.png'),
    firstName: 'Mathieu',
    lastName: 'Muty',
  },
  {
    imageLink: require('../../../assets/johan.png'),
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
            Découvre l&apos;équipe !
          </h2>
          <p className='mb-4 font-medium tracking-tight text-gray-400 xl:mb-6'>
            Découvres le trio le plus dynamique du monde de l&apos;informatique. Tous originaires de milieux différents
            mais unis par une passion commune pour la technologie.
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
