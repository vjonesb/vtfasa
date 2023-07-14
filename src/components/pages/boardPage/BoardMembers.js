/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Call the CardWithDropDown component whenever we want
 *  to add a new member.
 * 
 *  Passes down the image as well as a title and description
 */

import Oboard from '../../../pictures/O-Board_Pic.png';
import Eboard from '../../../pictures/E-Board_Pic.png';

import NewMember from "./CardWithDropDown";
import Grid from '@mui/material/Unstable_Grid2/Grid2';



function BoardMembers() {
  
  return (<Grid container justifyContent="center">
    <Grid item xs>
      <NewMember picture = {Oboard}
      title = "Officer Board"
      description = "The new members for our 2023-2024 school year!"/>
    </Grid>
    <Grid item xs>
      <NewMember picture = {Eboard}
      title = "Executive Board"
      description = "The new executive board for our 2023-2024 school year!"/>
    </Grid>
    
  </Grid>
  
  );
}

export default BoardMembers;