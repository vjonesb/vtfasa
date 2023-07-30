/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is the pop up for the emails.
 * Is centered with the help of the Grid components
 */
import * as React from 'react';

import { Button,TextField,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


function EmailFormDialog() {

  //Is set true so that it opens when it first loads
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Grid container xs = {12} justify="center" alignItems="center">
            <Grid item xs/>
            <Grid item>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Subscribe
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To receive emails about upcoming events and updates, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                    </DialogActions>
                </Dialog>

            </Grid>
            <Grid item xs/>
        </Grid>
      
    </div>
  );
}

export default EmailFormDialog;