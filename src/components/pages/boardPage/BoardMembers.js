/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Call the CardWithDropDown component whenever we want
 *  to add a new member.
 * 
 *  Passes down the image as well as a title and description
 */
import { Box, Typography, Paper } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ExecutiveBoard from './ExecutiveBoard';
import OfficerBoard from './OfficerBoard';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)(({ theme }) => ({
  background: '#EED589',
  
}));

function BoardMembers() {
  
  return (<Box sx = {{ marginTop:'50px'}}>
  <Grid container xs = {12}direction={'column'}
  justifyContent="center" alignItems="center"
  spacing={2}>
    

    <Grid item>
      <ExecutiveBoard/>
    </Grid>
    <Grid item xs>
      <Grid container>
        <Grid item xs/>
        <Grid item xs = {8}>
          <CustomPaper>
            <Typography 
            ml={2}
            mr={2}
          
            variant = 'h2' align='center'>
              Officer Board
            </Typography>
          </CustomPaper>
        </Grid>
        <Grid item xs/>
      </Grid>
    </Grid>
    <Grid item xs>
      <OfficerBoard/>
    </Grid>
    
  </Grid>
  
  
  </Box>
  
  );
}

export default BoardMembers;