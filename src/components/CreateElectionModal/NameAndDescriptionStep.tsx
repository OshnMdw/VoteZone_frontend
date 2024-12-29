import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Backdrop,
  Dialog,
} from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  open: boolean;
  onClose: () => void;
};

const StyledDialogContent = styled(Dialog)`
  && {
    .MuiPaper-root.MuiDialog-paper {
      border-radius: 10px;
    }

  && {
    .MuiDialogContent-root {
        max-width: 500px;
      }}
`;

const NameAndDescriptionStep: React.FC<Props & { onNext: () => void }> = ({
  open,
  onClose,
  onNext,
}) => {
  return (
    <Backdrop open={open}>
      <StyledDialogContent open={open} onClose={onClose}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DialogTitle>Create Election</DialogTitle>
          <DialogActions>
            <CloseIcon
              style={{ marginRight: '10px', cursor: 'pointer' }}
              onClick={onClose}
              color="primary"
            />
          </DialogActions>
        </div>
        <DialogContent>
          <DialogContentText>Enter the name and description of the election.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Election Name"
            type="text"
            fullWidth
          ></TextField>
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={onNext}>
            Next
          </Button>
        </DialogActions>
      </StyledDialogContent>
    </Backdrop>
  );
};

export default NameAndDescriptionStep;
