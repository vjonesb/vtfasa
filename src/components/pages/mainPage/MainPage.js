/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  is the main page, contains everything 
 *  we want to be shown on the first page
 */

import Section from './Section';

//Photos

import { Paper, Box} from '@mui/material';
import Divider from '../../Divider';
import Grid from '@mui/material/Unstable_Grid2';

import Events from './gridComponents/Updates';
import BordordConerSection from './gridComponents/BordordCornerSection';

//Section Texts
import SummaryOfFasa from './gridComponents/SummaryOfFasa';
import Scholarship from './gridComponents/Scholarship';
import BottomFooter from './gridComponents/BottomFooter';
import EmailFormDialog from './EmailFormDialog';

const MainPage = (props) => {
    //Section Titles
  const events = "Updates";

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
      },
};

    return (
    <div style={{ overflow: 'hidden', marginTop: '100px' }}>
        <img
          src='/pictures/fasa_pic.png' // Replace with the actual path to your image
          alt = 'cover'
          style={styles.image}/>
       
        <Grid container xs = {12}direction={'column'} spacing = {2}>
            <Grid item>
              <EmailFormDialog/>
            </Grid>
            <Grid>
                <BordordConerSection inside = {<SummaryOfFasa/>}/>
                
                
              
            </Grid>
            <Grid>
              <Section text = {events}/>
              <Events sx = {{marginTop: '10px'}}/>
            </Grid>
            <Grid item>
              <BordordConerSection  inside = {<Scholarship/>}/>
            </Grid>
            
            
            <Box sx = {{height: '30px'}}/>
        </Grid>
        <Box
        >
          <Paper sqaure sx = {{width: 'full'}}>
            <Box sx = {{height: '20px'}}/>
            <Divider color = '#224343'/>
            <BottomFooter/>
            <Box sx = {{height: '30px'}}/>
          </Paper>
        </Box>
        
          
        
    </div>
    );
}

export default MainPage;