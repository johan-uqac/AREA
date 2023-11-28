import React from 'react'
import { Button, Fab, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import useHomepageController from './useHomepageController'
import { ACTIONS, REACTIONS } from '../../Common/areas'
import Area from '../Components/Area'
import ActionReactionModal from '../Components/CreateArea'

const Homepage = () => {
  const { account, areas, showModal, toggleModal } = useHomepageController()

  return (
    <div className='w-screen pt-6 flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center mb-4'>
        <Typography
          variant='h4'
          className='font-bold'
        >
          Bon retour, {account.email}
        </Typography>
      </div>

      <Grid
        container
        spacing={4}
      >
        {areas.map((area, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Area area={area} />
          </Grid>
        ))}
      </Grid>

      <div className='flex justify-center mt-4'>
        <Fab
          color='primary'
          onClick={toggleModal}
        >
          <AddIcon />
        </Fab>
      </div>

      {showModal && (
        <ActionReactionModal
          actions={ACTIONS}
          reactions={REACTIONS}
          onClose={toggleModal}
          onConfirm={() => console.log('confirm')}
        />
      )}
    </div>
  )
}

export default Homepage
