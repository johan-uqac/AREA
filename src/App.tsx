import React from 'react'
import Button from '@mui/material/Button'

function ButtonUsage() {
  return (
    <Button
      variant='contained'
      className='justify-self-center self-center'
    >
      AREA
    </Button>
  )
}

export default function App() {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-midnight'>
      <ButtonUsage />
    </div>
  )
}
