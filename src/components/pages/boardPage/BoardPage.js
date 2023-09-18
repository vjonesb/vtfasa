/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 * Is the board Page manager
 */
import BoardMembers from "./BoardMembers";
import { Box, Card, CardContent, Paper, Typography, useMediaQuery} from '@mui/material';

import BottomFooter from '../mainPage/gridComponents/BottomFooter';
import { YouTubeEmbed } from 'react-social-media-embed';

import Divider from '../../Divider';
import { styled } from '@mui/system';
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const CustomPaper = styled(Paper)(({ theme }) => ({
  background: '#FFC000',
  
}));


function BoardPage() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const youtube = 'https://youtu.be/vQ4zeBsLpqM';

    
    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            marginTop: '0px',
          },
          image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            marginTop: '100px'
          },
          paper: {
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'fit-content',
            padding: '20px',
          },
    };



    return (<div>
              <div style={styles.container}>
                <img
                  src='/pictures/fasa_pic.png' // Replace with the actual path to your image
                  alt = 'cover'
                  style={styles.image}/>
                <CustomPaper style={styles.paper}
                elevation={8}>
                  <Typography variant="h3"
                  sx = {{
                      fontSize: { 
                        //has different breaksizes so that it's mobile compatible

                        xs: '1rem',   // Extra-small devices (phones)
                        sm: '1.5rem', // Small devices (tablets)
                        md: '2rem',   // Medium devices (desktops)
                        lg: '3rem',   // Large devices (large desktops)
                      }
                  }}>
                    2023 Officer Video!
                  </Typography>
                </CustomPaper>
              </div>
              <Grid container xs = {12} mt ={10} spacing = {1}>
                <Grid xs/>
                <Grid xs = {10}>
                  <Card sx = {{borderRadius: '20px'}}>
                  {isSmallScreen ? (
                      <CardContent>
                      <YouTubeEmbed url={youtube}
                      height = {200}
                      width = '100%'
                      align = 'center' />
                  
                  </CardContent>
                  ) : (
                      <CardContent>
                          <YouTubeEmbed url={youtube}
                          height = {460}
                          width = '100%'
                          align = 'center' />
                      
                      </CardContent>

                  )}
                      
                  </Card>

                </Grid>
                <Grid xs/>
              </Grid>
              
                
            
            
            <BoardMembers/>
            <Paper sqaure sx = {{width: 'full'}}>
                <Box sx = {{height: '20px'}} mt = {10}/>
                <Divider color = '#224343'/>
                <BottomFooter/>
            <Box sx = {{height: '30px'}}/>
          </Paper>
        </div>
        
       
    )
}

export default BoardPage;