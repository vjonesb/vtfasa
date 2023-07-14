/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  is the main page, contains everything 
 *  we want to be shown on the first page
 */

import Section from './Section';

//Photos

import { Paper, Box, ImageList, ImageListItem} from '@mui/material';
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
  

  const imageData = [
    {
      id: 1,
      img: '/pictures/fasa_pic.png',
      title: 'OBoard',
    },
  ];

    return (
    <div style={{ overflow: 'hidden', marginTop: '100px' }}>
        <Divider color = 'black'/>
        <ImageList cols={1}
          sx = {{
            marginLeft:'5px',
            marginRight: '5px'        
          }}>
          {imageData.map((item) => (
            <ImageListItem key={item.id}>
              <img 
                src={item.img} 
                alt={item.title} 
                
                />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid container xs = {12}direction={'column'}>
            <BordordConerSection inside = {<SummaryOfFasa/>}/>
            <Section text = {events} 
              colorBox1 = "#852d1a" 
              colorBox2 = "#f8c043"/>
            <Events sx = {{marginTop: '10px'}}/>
            <BordordConerSection  inside = {<Scholarship/>}/>
            <Box sx = {{height: '30px'}}/>
        </Grid>
        <Box
        >
          <Paper sqaure sx = {{width: 'full'}}>
            <Box sx = {{height: '20px'}}/>
            <Divider color = 'green'/>
            <BottomFooter/>
            <Box sx = {{height: '30px'}}/>
          </Paper>
        </Box>
        
          
        
    </div>
    );
}

export default MainPage;