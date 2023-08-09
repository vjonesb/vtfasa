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
import WebMaster from './DifferentCommitties/WebMaster';

//Senior Advisors (just simple to have here)
import SeniorAdvisorChair1 from '../../../pictures/SeniorAdvisor/SeniorAdvisorChair1.png';
import SeniorAdvisorChair2 from '../../../pictures/SeniorAdvisor/SeniorAdvisorChair2.png';
import MemberIcon from './DifferentCommitties/MemberIcon';


const CustomPaper = styled(Paper)(({ theme }) => ({
  background: '#FFC000',
  
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
      <CustomPaper>
        <Typography variant='h3'
        sx = {{
          marginLeft: '10px',
          marginRight: '10px',
          fontSize: {
            xs: '1rem',   // Extra-small devices (phones)
            sm: '1.5rem', // Small devices (tablets)
            md: '2rem',   // Medium devices (desktops)
            lg: '4rem',   // Large devices (large desktops)
          }
      }}>
          Senior Advisors
        </Typography>
        
      </CustomPaper>

    </Grid>
    <Grid item xs>
      <Grid container xs = {12} spacing={2}>
        <Grid item xs>
          <MemberIcon chair = {SeniorAdvisorChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />

        </Grid>
        <Grid item xs>
        <MemberIcon chair = {SeniorAdvisorChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        </Grid>
        
      </Grid>
    </Grid>
    <Grid item xs>
      <Paper>
        <Typography variant='h3'
        sx = {{
          marginLeft: '10px',
          marginRight: '10px',
          fontSize: {
            xs: '1rem',   // Extra-small devices (phones)
            sm: '1.5rem', // Small devices (tablets)
            md: '2rem',   // Medium devices (desktops)
            lg: '4rem',   // Large devices (large desktops)
          }
      }}>
          Web Masters
        </Typography>
        
      </Paper>

    </Grid>
    <Grid item xs>
    <WebMaster/>
    </Grid>
    <Grid item xs>
      <Grid container>
        <Grid item xs/>
        <Grid item xs = {8}>
          <CustomPaper>
            <Typography 
            ml={2}
            mr={2}
            variant = 'h2' align='center'
            sx = {{
              fontSize: {
                xs: '1rem',   // Extra-small devices (phones)
                sm: '1.5rem', // Small devices (tablets)
                md: '2rem',   // Medium devices (desktops)
                lg: '4rem',   // Large devices (large desktops)
              }
          }}>
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