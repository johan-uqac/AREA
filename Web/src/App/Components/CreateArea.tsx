import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, Typography } from '@mui/material'
import { SERVICE } from '../../Common/types/Area'

type ActionReactionModalProps = {
  actions: SERVICE[]
  reactions: SERVICE[]
  onClose: () => void
  onConfirm: (actionId: string, reactionId: string) => void
}

const ActionReactionModal = ({ actions, reactions, onClose, onConfirm }: ActionReactionModalProps) => {
  const [selectedAction, setSelectedAction] = useState(actions[0].id)
  const [selectedReaction, setSelectedReaction] = useState(reactions[0].id)

  const handleConfirm = () => {
    onConfirm(selectedAction, selectedReaction)
    onClose()
  }

  type DisplaySelectorProps = {
    selected: string
    setSelected: (id: string) => void
    items: SERVICE[]
    title: string
  }

  const DisplaySelector = ({ selected, setSelected, items, title }: DisplaySelectorProps) => (
    <>
      <Typography variant='subtitle1'>{title}</Typography>
      <Select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        fullWidth
      >
        {items.map(item => (
          <MenuItem
            key={item.id}
            value={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </>
  )
  return (
    <Dialog
      open
      onClose={onClose}
    >
      <DialogTitle>Choisis une action et une réaction</DialogTitle>
      <DialogContent>
        <DisplaySelector
          selected={selectedAction}
          setSelected={setSelectedAction}
          items={actions}
          title='Choisis une action!'
        />
        <div className='mt-4'>
          <DisplaySelector
            selected={selectedReaction}
            setSelected={setSelectedReaction}
            items={reactions}
            title='Choisis une reaction!'
          />
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
