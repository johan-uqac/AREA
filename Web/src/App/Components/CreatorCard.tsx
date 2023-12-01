import React from 'react'

type Props = {
  imageLink: string
  firstName: string
  lastName: string
}

export default function CreatorCard({ imageLink, firstName, lastName }: Props) {
  return (
    <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
      <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
        <img
          alt={firstName + ' ' + lastName + ' profile picture'}
          className='w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-8'
          src={imageLink}
        />
        <h2 className='text-gray-900 title-font font-medium'>
          {firstName} <h2 className='text-teal-600 title-font font-medium'> {lastName}</h2>{' '}
        </h2>
      </div>
    </div>
  )
}
