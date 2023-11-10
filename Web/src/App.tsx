import React, { useEffect, useState } from 'react'
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
  const [connection, setConnection] = useState('not fetched yet')

  useEffect(() => {
    fetch('http://localhost:3001/connectionStatus/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          setConnection('Success')
        }
      })
      .catch(() => {
        setConnection('Error')
      })
  }, [])

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-midnight'>
      <ButtonUsage />
      <span>{'Connexion: ' + connection}</span>
    </div>
  )
}
