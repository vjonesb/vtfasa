/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description: 
 *  is the bordord corners and inserts any text needed
 */


import { Box, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const BordordConerText = (props) => {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <div align = 'center'>
        <Grid container xs = {12}>
                <Grid container xs = {1} direction = "column" mt = {2}>
                  <Grid xs = {8}>
                    {!isSmallScreen ? (
                      <Box sx = {{ 
                        borderLeft: 1,
                        borderTop: 1,
                        borderWidth: '5px',
                        height: '100%',
                        width: '70px', 
                        position: 'relative',
                        paddingBottom: '100%', }}/>

                    ) : (
                      <div></div>
                    )}
                    
                  </Grid>
              </Grid>
              <Grid xs>
                <div>
                    {props.inside}
                </div>
              </Grid>
              <Grid container xs = {1} direction = "column-reverse" mb = {2} >
                  <Grid xs = {8}>
                    {!isSmallScreen ? (
                      <Box sx = {{ 
                        borderRight: 1,
                        borderBottom: 1,
                        borderWidth: '5px',
                        height: '100%',
                        width: '70px', 
                        position: 'relative',
                        paddingBottom: '100%', }}/>

                    ) : (
                      <div/>
                    )}
                    
                  </Grid>
              </Grid>
            </Grid>
            </div>
  
      );
}

export default BordordConerText;