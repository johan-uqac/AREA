import React from 'react'
import Button from './Button'
import { AREA } from '../../Common/types/Area'

type Props = {
  area: AREA
  deleteArea: (id: string) => void
}

type Logo = {
  [key: string]: string
}

const Area = ({ area, deleteArea }: Props) => {
  const logo: Logo = {
    gmail: require('../../assets/google.png'),
    meteo: require('../../assets/meteo.png'),
    iss: require('../../assets/nasa.png'),
  }

  return (
    <li
      className='py-3 sm:py-4'
      key={area.id}
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
            onClick={() => deleteArea(area.id)}
            type='primary'
          >
            Supprimer
          </Button>
        </div>
      </div>
    </li>
  )
}

export default Area
