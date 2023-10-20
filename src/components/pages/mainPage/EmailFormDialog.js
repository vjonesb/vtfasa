/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is the pop up for the emails.
 * Is centered with the help of the Grid components
 */
import * as React from 'react';


import { Button  } from '@mui/material';
  //TextField,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, Snackbar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';



function EmailFormDialog() {

  const link = "https://forms.gle/Vb4wi5dg9cZJSG2Y6";

//   //The email
//   const [email, setEmail] = React.useState('');


//   const handleEmailChange = (event) => {
//     //is called whenever the input value changes
//     setEmail(event.target.value);
//   }


//   //is called when the "submit" button has been clicked
//   const handleEmailSubmit = (event) => {
    
//     const formEle = document.querySelector("form");

//     event.preventDefault();
//     const formData = new FormData(formEle);


//     fetch("https://script.google.com/macros/s/AKfycbxOKFdcUzKdneHg3jmgun6u4CrxwFlsr0FIi8yRaASqwYHSr7QOheaYyHL7VsPnfxE/exec"
//     , 
//     {
//         method: "POST",
//         body: formData,
//         mode: "no-cors"
//     })
//     .then(response => {
//         openSuccess();
//         handleClose();
//     })
//     .catch(error => {
//         console.error("Fetch error:", error);
//     });
    
// }

//   //Is set true so that it opens when it first loads
//   const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [success, setSuccess] = React.useState(false);

//   const openSuccess = () => {
//     setSuccess(true);
//   }

//   const closeSuccess = () => {
//     setSuccess(false);
//   }



  return (
    <div>
        <Grid container xs = {12} justify="center" alignItems="center">
            <Grid item xs/>
            <Grid item>
                <Button href={link} target="_blank" rel="noopener"
                variant="outlined">
                    Subscribe
                </Button>
                {/* <Dialog open={open} onClose={handleClose} 
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
                    <Button type = "submit">Submit</Button>
                    

                   
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
                 */}

            </Grid>
            <Grid item xs/>
        </Grid>
      
    </div>
  );
}

export default EmailFormDialog;