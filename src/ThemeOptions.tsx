import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#224343',
    },
    secondary: {
      main: '#852d1a',
      
    },
    
    
    divider: '#263238',
    background: {
      paper: '#e3dcc8',
      default: '#fbf3db',
    },
  },
  breakpoints: {
    // Add your custom breakpoints here
    values: {
      xs: 0,       // Mobile phones
      sm: 600,     // Tablets
      md: 960,     // Small laptops
      lg: 1280,    // Medium laptops
      xl: 1920,    // Large laptops and desktops
    },
  },
  
  typography: {
    fontFamily: 'Bree Serif', 
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem', // Font size for tablets and larger
      },
      '@media (min-width:960px)': {
        fontSize: '3.5rem', // Font size for small laptops and larger
      },
      '@media (min-width:1280px)': {
        fontSize: '4.5rem', // Font size for medium laptops and larger
      },

    }, 
    h3: {
        fontSize: '0.8rem',   // Default font size for all devices
        '@media (min-width:600px)': {
          fontSize: '1.3rem', // Font size for tablets and larger
        },
        '@media (min-width:960px)': {
          fontSize: '2.8rem', // Font size for small laptops and larger
        },
        '@media (min-width:1280px)': {
          fontSize: '3rem', // Font size for medium laptops and larger
        },
    },
    h6: {
      fontSize: '0.6rem',   // Default font size for all devices
      '@media (min-width:600px)': {
        fontSize: '1.3rem', // Font size for tablets and larger
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem', // Font size for small laptops and larger
      },
      '@media (min-width:1280px)': {
        fontSize: '2rem', // Font size for medium laptops and larger
      },
  },

    body1: {
      fontSize: '0.5rem',
        '@media (min-width:600px)': {
          fontSize: '0.7rem',   // Extra-small devices (phones)
          
        },
        '@media (min-width:960px)' : {
          fontSize: '1rem',   // Medium devices (desktops)
        },
        '@media (min-width:1280px)' : {
          fontSize: '1rem',   // Large devices (large desktops)

        }

    },

    body2: {
        fontSize: '0.5rem',
        '@media (min-width:600px)': {
          fontSize: '0.7rem',   // Extra-small devices (phones)
          
        },
        '@media (min-width:960px)' : {
          fontSize: '1rem',   // Medium devices (desktops)
        },
        '@media (min-width:1280px)' : {
          fontSize: '1rem',   // Large devices (large desktops)

        }
      }
  }
  
  
  
};
