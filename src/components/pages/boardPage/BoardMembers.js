/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Call the CardWithDropDown component whenever we want
 *  to add a new member.
 * 
 *  Passes down the image as well as a title and description
 */
import { Box, Typography, Paper, Card, CardContent } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ExecutiveBoard from './ExecutiveBoard';
import OfficerBoard from './OfficerBoard';
import { styled } from '@mui/system';
import WebMaster from './DifferentCommitties/WebMaster';

import { InstagramEmbed } from 'react-social-media-embed';


const CustomPaper = styled(Paper)(({ theme }) => ({
  background: '#FFC000',
  
}));

function BoardMembers() {

  const advisors = "https://www.instagram.com/p/CxlZMNVvfHe/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
  
  return (<Box sx = {{ marginTop:'50px'}}>
  <Grid container xs = {12}direction={'column'}
  justifyContent="center" alignItems="center"
  spacing={2}>
    
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
          Executive Board
        </Typography>
        
      </CustomPaper>

    </Grid>
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
    <Grid item xs = {1}/>
            <Grid item xs = {10}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {advisors}                   
                    style={{
                        maxWidth: 550,           
                    }}
                        width="100%"
                        align = 'center' />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {1}/>
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