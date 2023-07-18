/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Call the CardWithDropDown component whenever we want
 *  to add a new member.
 * 
 *  Passes down the image as well as a title and description
 */
import President from '../../../pictures/ExecutiveBoard/President.png';
import VicePresident from '../../../pictures/ExecutiveBoard/VicePres.png';
import ExternalPres from '../../../pictures/ExecutiveBoard/ExternalPres.png';
import Treasurer from '../../../pictures/ExecutiveBoard/Treasurer.png';
import Secretary from '../../../pictures/ExecutiveBoard/Secretary.png';




import NewMember from "./CardWithDropDown";
import Grid from '@mui/material/Unstable_Grid2/Grid2';



function ExecutiveBoard() {
  
  return (<Grid container xs = {12} justifyContent="center">
    <Grid item xs/>
    <Grid container xs = {8}>
        <Grid item xs>
        <NewMember picture = {VicePresident}
        title = "Delfin Lagman"
        description = "The new Internal Vice President for our 2023-2024 school year!"/>
        </Grid>
        <Grid item xs>
        <NewMember picture = {ExternalPres}
        title = "Alexa Marticio"
        description = "The new External Vice President for our 2023-2024 school year!"/>
        </Grid>
        <Grid item xs>
        <NewMember picture = {President}
        title = "Pamela Untalan"
        description = "Our 2023-2024 club president!"/>
        </Grid>
        
        <Grid item xs>
        <NewMember picture = {Secretary}
        title = "Eric Domingo"
        description = "Our 2023-2024 club Secretary!"/>
        </Grid>
        <Grid item xs>
        <NewMember picture = {Treasurer}
        title = "Megan Simbile"
        description = "Our 2023-2024 club Treasurer!"/>
        </Grid>
    </Grid>
    <Grid item xs/>
    
  </Grid>
  
  );
}

export default ExecutiveBoard;