/*
    author: Patrick Vyn Badiang

    description:
    Is the mean header of the page, does not change
*/
import FasaImg from '../pictures/FasaLogo.png';
import { Typography, Box, AppBar, Toolbar, Button, ButtonGroup, Avatar, useScrollTrigger, Link, useMediaQuery } from "@mui/material";
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { useState } from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import ConstitutionIcon from '@mui/icons-material/ReceiptLong';
import DonationIcon from '@mui/icons-material/Paid';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

const MainHeader = (props) => {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleActionClick = (action) => {
    //handle the click of each speed dial action here
    //IMplement custom logic for each action
    console.log('clicked action: ', action);

    //performs based on the clicked action
    switch(action) {
      case 'Home':
        window.location.href = "/";
        break;
      case 'Board':
        window.location.href = "/board";
        break;
      case 'Resources':
        window.location.href = "/resources";
        break;
      case 'Constitution':
        window.location.href = "/constitution";
        break;
      case 'Donation':
        window.location.href = "/donation";
        break;
      default:
        window.location.href = "/";
        break;
    }
  }

  const actions = [
    {icon: <HomeIcon />, name: 'Home'}, 
    {icon: <DashboardIcon />, name: 'Board'},
    {icon: <HelpIcon />, name: 'Resources'},
    {icon: <ConstitutionIcon />, name: 'Constitution'},
    {icon: <DonationIcon />, name: 'Donation'},
    
  ]
    

    return (
        <Box>
            <HideOnScroll {...props}>
            
            {isSmallScreen ? (
            <SpeedDial
              ariaLabel="SpeedDial example"
              icon={<Avatar 
                src = {FasaImg}
                sx = {{
                    width: '75px',
                    height: '75px',
                    marginRight: '10px'
                }}/>}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
              direction="right"
              sx={{
                position: 'fixed',
                top: '20px', // Adjust the position as needed
                left: '20px', // Adjust the position as needed
                zIndex: 9999, // Set a high z-index to ensure the speed dial is on top
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => handleActionClick(action.name)}
                />
              ))}
            </SpeedDial>
          ) : (
            <AppBar sx = {{
              marginBottom: '5px',
              height: '100px'
          }}>
              <Toolbar sx = {{
                  marginTop: '10px'
              }}>
                  <Avatar 
                      src = {FasaImg}
                      sx = {{
                          width: '75px',
                          height: '75px',
                          marginRight: '10px'
                      }}/>
                      <Typography 
                      component= {Link}
                      href = "/"
                      variant="h3"
                      fontWeight={'bold'}
                      sx = {{
                          fontSize: {
                              xs: '1rem',   // Extra-small devices (phones)
                              sm: '2.5rem', // Small devices (tablets)
                              md: '3rem',   // Medium devices (desktops)
                              lg: '4rem',   // Large devices (large desktops)
                            },
                          flexGrow: 1,
                          color: 'inherit',
                          textDecoration: 'none',
                          '&:hover': {
                          },
                      }}>{props.text}
                  </Typography>
                  
                  <ButtonGroup 
                      variant = 'contained' disableElevation
                      aria-label="outlined primary button group">
                      
                      <Button href = "/"
                          sx={{ my: 2, color: 'white', display: 'block' }}>

                          <Typography variant = "h6" fontWeight={'bold'}
                          sx = {{fontSize: {
                              xs: '0.3rem',   // Extra-small devices (phones)
                              sm: '0.7rem', // Small devices (tablets)
                              md: '1rem',   // Medium devices (desktops)
                              lg: '1rem',   // Large devices (large desktops)
                              
                            },}} >
                          Home
                          </Typography>        
                                              
                      </Button>
                      <Button href = "/board"
                          sx={{ my: 2, color: 'white', display: 'block' }}>

                          <Typography variant = "h6" fontWeight={'bold'}
                          sx = {{fontSize: {
                              xs: '0.3rem',   // Extra-small devices (phones)
                              sm: '0.7rem', // Small devices (tablets)
                              md: '1rem',   // Medium devices (desktops)
                              lg: '1rem',   // Large devices (large desktops)
                              
                            },}}>
                          Board
                          </Typography>   
                      </Button>
                      <Button href = "/resources"
                          sx={{ my: 2, color: 'white', display: 'block' }}>
                          <Typography variant = "h6" fontWeight={'bold'}
                          sx = {{fontSize: {
                              xs: '0.3rem',   // Extra-small devices (phones)
                              sm: '0.7rem', // Small devices (tablets)
                              md: '1rem',   // Medium devices (desktops)
                              lg: '1rem',   // Large devices (large desktops)
                              
                            },}} >
                          Resources
                          </Typography>                                 
                      </Button>
                      <Button href = "/constitution"
                          sx={{ my: 2, color: 'white', display: 'block' }}>
                          <Typography variant = "h6" fontWeight={'bold'}
                          sx = {{fontSize: {
                              xs: '0.3rem',   // Extra-small devices (phones)
                              sm: '0.7rem', // Small devices (tablets)
                              md: '1rem',   // Medium devices (desktops)
                              lg: '1rem',   // Large devices (large desktops)
                              
                            },}} >
                          Constitution
                          </Typography>                                 
                      </Button>
                      <Button href = "/donation"
                          sx={{ my: 2, color: 'white', display: 'block' }}>
                          <Typography variant = "h6" fontWeight={'bold'}
                          sx = {{fontSize: {
                              xs: '0.3rem',   // Extra-small devices (phones)
                              sm: '0.7rem', // Small devices (tablets)
                              md: '1rem',   // Medium devices (desktops)
                              lg: '1rem',   // Large devices (large desktops)
                              
                            },}} >
                          Donate Now
                          </Typography>                                 
                      </Button>
                      
                  </ButtonGroup>
              </Toolbar>
          </AppBar>

          )}
                
            
            </HideOnScroll>
        </Box>

    );

}

export default MainHeader;