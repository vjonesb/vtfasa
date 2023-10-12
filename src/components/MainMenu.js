import { AppBar, Dialog, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';


import MenuIcon from '@mui/icons-material/Menu';

function MainMenu() {


  

  const [dialogOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={dialogOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={dialogOpen ? 'true' : undefined}
        onClick={handleClickOpen}>
        <MenuIcon/>
      </IconButton>
      <Dialog
       fullScreen
       open={dialogOpen}
       onClose={handleClickClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClickClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h2" component="div">
              FASA at VT
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton component = "a" href='/'> 
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component = "a" href='/board'>
            <ListItemText primary="Board"/>
          </ListItemButton>
          <ListItemButton component = "a" href = "/resources">
            <ListItemText primary="Resources"/>
          </ListItemButton>
          <ListItemButton component = "a" href = "/constitution">
            <ListItemText primary="Constitution"/>
          </ListItemButton>
          <ListItemButton component = "a" href = "/donation">
            <ListItemText primary="Donate Now"/>
          </ListItemButton>
          <ListItemButton component = "a" href = "/forms">
            <ListItemText primary = "Pictures, Forms, and Slides"/>
          </ListItemButton>

        </List>
        
      </Dialog>
    </div>
  );
}

export default MainMenu;