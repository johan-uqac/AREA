import React from 'react'
import { Fab, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import useHomepageController from './useHomepageController'
import { ACTIONS, REACTIONS } from '../../Common/areas'
import Area from '../Components/Area'
import ActionReactionModal from '../Components/CreateArea'

const Homepage = () => {
  const { account, areas, showModal, toggleModal, deleteArea, addArea } = useHomepageController()

  return (
    <div className='w-screen pt-6 flex flex-col items-center justify-center'>
      <div className='flex items-center mb-4 gap-8 px-8'>
        <Typography
          variant='h4'
          className='font-bold'
        >
          Bon retour, {account.email}
        </Typography>
        <Fab
          color='primary'
          onClick={toggleModal}
        >
          <AddIcon />
        </Fab>
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
            container
            justifyContent={'center'}
          >
            <Area
              area={area}
              deleteArea={deleteArea}
            />
          </Grid>
        ))}
      </Grid>
      {showModal && (
        <ActionReactionModal
          actions={ACTIONS}
          reactions={REACTIONS}
          onClose={toggleModal}
          onConfirm={addArea}
        />
      )}
    </div>
  )
}

export default Homepage
