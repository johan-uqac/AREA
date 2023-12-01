import React from 'react'

type Props = {
  children: JSX.Element
  text: string
}

export default function HowListItem({ children, text }: Props) {
  return (
    <li className='flex items-center py-2 space-x-4 xl:py-3'>
      {children}
      <span className='font-medium text-gray-500'>{text}</span>
    </li>
  )
}
