/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is the pop up for the emails.
 * Is centered with the help of the Grid components
 */
import * as React from 'react';


import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Typography  } from '@mui/material';
  //TextField,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, Snackbar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';



function EmailFormDialog() {

  const link = "https://forms.gle/Vb4wi5dg9cZJSG2Y6";

  


  //Is set true so that it opens when it first loads
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  const [success, setSuccess] = React.useState(false);


  const closeSuccess = () => {
    setSuccess(false);
  }



  return (
    <div>
        <Grid container xs = {12} justify="center" alignItems="center">
            <Grid item xs/>
            <Grid item>
                <Button href={link} target="_blank" rel="noopener"
                variant="outlined">
                    Subscribe
                </Button>
                <Dialog open={open} onClose={handleClose} 
                component = "form">
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To receive emails about upcoming events and updates, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    
                      <Button href={link} target="_blank" rel="noopener"
                    variant="outlined">
                        Subscribe
                    </Button>                    

                    
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Done</Button>
                    
                    

                   
                    </DialogActions>
                </Dialog>
                <Snackbar
                  open={success}
                  autoHideDuration={6000}
                  onClose={closeSuccess}
                  message="Email Added"
                >
                  <Alert open = {success}
                  onClose = {closeSuccess}> 
                    <Typography variant='body1'>
                      Email Added Successfully 
                    </Typography>
                </Alert>
                </Snackbar>
                 

            </Grid>
            <Grid item xs/>
        </Grid>
      
    </div>
  );
}

export default EmailFormDialog;