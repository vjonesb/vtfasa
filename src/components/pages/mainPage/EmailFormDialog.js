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
import { EventRepeat } from '@mui/icons-material';



function EmailFormDialog() {

  function Submite(e){

  }

  //The email
  const [email, setEmail] = React.useState('');


  const handleEmailChange = (event) => {
    //is called whenever the input value changes
    setEmail(event.target.value);
  }

  const handleEmailSubmit = (event) => {
    const formEle = document.querySelector("form");

    event.preventDefault();
    const formData = new FormData(formEle);


    fetch("https://script.google.com/macros/s/AKfycbxOKFdcUzKdneHg3jmgun6u4CrxwFlsr0FIi8yRaASqwYHSr7QOheaYyHL7VsPnfxE/exec"
    , 
    {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(response => {
        console.log("Success");
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    handleClose();
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
                <Dialog open={open} onClose={handleClose} 
                component = "form" onSubmit = {(event) => handleEmailSubmit(event)}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To receive emails about upcoming events and updates, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        placeholder='Email'
                        name = "Email"
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
                    <Button onClick={handleClose} type = "submit">Submit</Button>

                   
                    </DialogActions>
                </Dialog>

            </Grid>
            <Grid item xs/>
        </Grid>
      
    </div>
  );
}

export default EmailFormDialog;