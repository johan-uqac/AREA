import React from 'react'
import { Paper, Typography, Button } from '@mui/material'

const Area = ({ area }) => {
  const logo = {
    spotify: require('./assets/spotify.png'),
    gmail: require('./assets/google.png'),
    meteo: require('./assets/meteo.png'),
  }

  return (
    <Paper
      elevation={3}
      className='w-72 h-80 m-4 p-2 flex flex-col items-center cursor-pointer'
    >
      <div className='flex justify-between w-full'>
        <img
          src={logo[area.action.platform]}
          alt="Logo de l'action"
          className='w-14 h-14 p-2'
        />
        <Typography
          variant='h5'
          className='m-2 text-xl'
        >
          AREA
        </Typography>
        <img
          src={logo[area.reaction.platform]}
          alt='Logo de la réaction'
          className='w-14 h-14 p-2'
        />
      </div>
      <div className='flex flex-col justify-around items-center h-2/3'>
        <div className='p-2 h-1/2'>
          <Typography
            variant='body1'
            align='center'
          >
            {area.action.description}
          </Typography>
        </div>
        <div className='p-2 h-1/2'>
          <Typography
            variant='body1'
            align='center'
          >
            {area.reaction.description}
          </Typography>
        </div>
      </div>
      {/* You can add a delete button or any other action button here */}
      <Button
        variant='contained'
        color='error'
        className='mt-2'
      >
        Delete
      </Button>
    </Paper>
  )
}

export default Area