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



function BoardMembers() {
  
  return (<div>
  <Box sx = {{height: '150px'}}/>

  <Grid container xs = {12}direction={'column'}>
    <Grid item>
      <Typography variant = 'h2' align='center'>Executive Board</Typography>
      <ExecutiveBoard/>
      
    </Grid>
    <Grid item xs>
      <Box sx = {{border: 1}}/>
    </Grid>
    
  </Grid>
  </div>
  
  );
}

export default BoardMembers;