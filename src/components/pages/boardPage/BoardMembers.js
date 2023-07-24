/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Call the CardWithDropDown component whenever we want
 *  to add a new member.
 * 
 *  Passes down the image as well as a title and description
 */
import { Box, Typography } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ExecutiveBoard from './ExecutiveBoard';
import OfficerBoard from './OfficerBoard';


function BoardMembers() {
  
  return (<Box sx = {{ marginTop:'50px'}}>
  <Grid container xs = {12}direction={'column'}
  justifyContent="center" alignItems="center">
    

    <Grid item>
      <ExecutiveBoard/>
    </Grid>
    <Grid item xs>
      <Typography variant = 'h2' align='center'>Officer Board</Typography>
      <OfficerBoard/>
    </Grid>
    
  </Grid>
  
  
  </Box>
  
  );
}

export default BoardMembers;