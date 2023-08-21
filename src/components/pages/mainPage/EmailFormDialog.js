/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is the pop up for the emails.
 * Is centered with the help of the Grid components
 */
import * as React from 'react';
import axios from 'axios';


import { Button,TextField,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


function EmailFormDialog() {

  //The email
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleEmailSubmit = () => {
    axios.post('http://localhost:3000/api/updateExcel', {email})
      .then ((response) => {
        //Success message
        handleClose();
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
      })
  }

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
                        value = {email}
                        onChange={handleEmailChange}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEmailSubmit}>Subscribe</Button>
                    </DialogActions>
                </Dialog>

            </Grid>
            <Grid item xs/>
        </Grid>
      
    </div>
  );
}

export default EmailFormDialog;