import React from 'react'
import { Paper, Typography, Button } from '@mui/material'

const Area = ({ area }) => {
  const logo = {
    gmail: require('./assets/google.png'),
    meteo: require('./assets/meteo.png'),
    iss: require('./assets/nasa.png'),
  }

  return (
    <li
      className='py-3 sm:py-4'
      key={area.action.name + area.reaction.name}
    >
      <div className='flex items-center space-x-4 rtl:space-x-reverse'>
        <div className='flex-shrink-0'>
          <img
            className='w-8 h-8 rounded-full aspect-square'
            src={logo[area.action.platform]}
            alt='area'
          />
        </div>
        <div className='flex-1 min-w-0 flex-col'>
          <p className='text-sm font-medium text-black truncate'>{area.action.description}</p>
          <p className='text-sm text-black truncate'>{area.reaction.description}</p>
        </div>
        <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              console.log('delete')
            }}
            className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900'
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  )
}

export default Area
