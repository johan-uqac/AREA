import React from 'react'
import { AREA } from '../../../Common/types/Area'
import Area from '../../Components/Area'

type AreasViewProps = {
  areas: AREA[]
  deleteArea: (id: string) => void
}

const AreasView = ({ areas, deleteArea }: AreasViewProps) => (
  <div className='w-full md:w-1/2'>
    <div className='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'>
      <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
        {areas.map((area, index) => (
          <Area
            area={area}
            key={index}
            deleteArea={deleteArea}
          />
        ))}
      </ul>
    </div>
  </div>
)

export default AreasView
