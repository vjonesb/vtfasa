/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 * Is the board Page manager
 */
import BoardMembers from "./BoardMembers";
import { Box, Paper, Typography} from '@mui/material';

import BottomFooter from '../mainPage/gridComponents/BottomFooter';
import Divider from '../../Divider';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)(({ theme }) => ({
  background: '#EED589',
  
}));


function BoardPage() {
    
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
                        xs: '1rem',   // Extra-small devices (phones)
                        sm: '1.5rem', // Small devices (tablets)
                        md: '2rem',   // Medium devices (desktops)
                        lg: '3rem',   // Large devices (large desktops)
                      }
                  }}>
                    Executive Board
                  </Typography>
                </CustomPaper>
              </div>
            
            
            <BoardMembers/>
            <Paper sqaure sx = {{width: 'full'}}>
                <Box sx = {{height: '20px'}} mt = {10}/>
                <Divider color = 'green'/>
                <BottomFooter/>
            <Box sx = {{height: '30px'}}/>
          </Paper>
        </div>
        
       
    )
}

export default BoardPage;