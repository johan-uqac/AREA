import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, Typography } from '@mui/material';

const ActionReactionModal = ({ actions, reactions, onClose, onConfirm }) => {
  const [selectedAction, setSelectedAction] = useState('');
  const [selectedReaction, setSelectedReaction] = useState('');

  const handleConfirm = () => {
    onConfirm({ action: selectedAction, reaction: selectedReaction });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Select Action and Reaction</DialogTitle>
      <DialogContent>
        <div>
          <Typography variant="subtitle1">Select Action:</Typography>
          <Select
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
            fullWidth
          >
            {actions.map((action) => (
              <MenuItem key={action.id} value={action.id}>
                {action.name}
              </MenuItem>
            ))}
          </Select>
          {selectedAction && (
            <Typography variant="body2" color="textSecondary">
              {actions.find((action) => action.id === selectedAction).description}
            </Typography>
          )}
        </div>
        <div className="mt-4">
          <Typography variant="subtitle1">Select Reaction:</Typography>
          <Select
            value={selectedReaction}
            onChange={(e) => setSelectedReaction(e.target.value)}
            fullWidth
          >
            {reactions.map((reaction) => (
              <MenuItem key={reaction.id} value={reaction.id}>
                {reaction.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleConfirm} disabled={!selectedAction || !selectedReaction}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActionReactionModal;
