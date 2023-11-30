import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

const ActionReactionModal = ({ actions, reactions, onClose, onConfirm }) => {
  const [selectedAction, setSelectedAction] = useState(actions[0].id)
  const [selectedReaction, setSelectedReaction] = useState(reactions[0].id)

  const handleConfirm = () => {
    onConfirm({
      id: uuidv4(),
      action: actions.find(action => action.id === selectedAction),
      reaction: reactions.find(reaction => reaction.id === selectedReaction),
    })
    onClose()
  }

  return (
    <Dialog
      open
      onClose={onClose}
    >
      <DialogTitle>Select Action and Reaction</DialogTitle>
      <DialogContent>
        <div>
          <Typography variant='subtitle1'>Select Action:</Typography>
          <Select
            value={selectedAction}
            onChange={e => setSelectedAction(e.target.value)}
            fullWidth
          >
            {actions.map(action => (
              <MenuItem
                key={action.id}
                value={action.id}
              >
                {action.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className='mt-4'>
          <Typography variant='subtitle1'>Select Reaction:</Typography>
          <Select
            value={selectedReaction}
            onChange={e => setSelectedReaction(e.target.value)}
            fullWidth
          >
            {reactions.map(reaction => (
              <MenuItem
                key={reaction.id}
                value={reaction.id}
              >
                {reaction.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleConfirm}
          disabled={!selectedAction || !selectedReaction}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ActionReactionModal
