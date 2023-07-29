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

import Events from './gridComponents/Events';
import BordordConerSection from './gridComponents/BordordCornerSection';

//Section Texts
import SummaryOfFasa from './gridComponents/SummaryOfFasa';
import Scholarship from './gridComponents/Scholarship';
import BottomFooter from './gridComponents/BottomFooter';

const MainPage = (props) => {
    //Section Titles
  const events = "Events";

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
        <Divider color = 'black'/>
        <img
                  src='/pictures/fasa_pic.png' // Replace with the actual path to your image
                  alt = 'cover'
                  style={styles.image}/>
        
        <Grid container xs = {12}direction={'column'}>
            <BordordConerSection inside = {<SummaryOfFasa/>}/>
            <Section text = {events}/>
            <Events sx = {{marginTop: '10px'}}/>
            <BordordConerSection  inside = {<Scholarship/>}/>
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