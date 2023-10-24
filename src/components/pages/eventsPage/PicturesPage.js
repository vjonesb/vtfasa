/**
 * Is the pictures page
 */
import { Box, Paper, Typography } from "@mui/material";
import Divider from "../../Divider";
import BottomFooter from "../mainPage/gridComponents/BottomFooter";

import FASAFormPage from "./FASAFormPage";
import PicturesData from './PicturesData.json';

function PicturesPage() {
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



    return(
        <div>
        <div style={styles.container} >
            <img
              src='/pictures/fasa_pic.png' // Replace with the actual path to your image
              alt = 'cover'
              style={styles.image}/>
            <Paper style={styles.paper}>
              <Typography variant="h3"
              sx = {{
                  fontSize: {
                    xs: '1rem',   // Extra-small devices (phones)
                    sm: '1.5rem', // Small devices (tablets)
                    md: '2rem',   // Medium devices (desktops)
                    lg: '3rem',   // Large devices (large desktops)
                  }
              }}>
                Pictures
              </Typography>
            </Paper>
          </div>
          <div style = {{marginLeft: 30, marginTop: 50}}/>
            <FASAFormPage forms = {PicturesData}/>
            
        <Paper sqaure sx = {{width: 'full'}}>
            <Box sx = {{height: '20px'}} mt = {10}/>
            <Divider color = '#224343'/>
            <BottomFooter/>
        <Box sx = {{height: '30px'}}/>
      </Paper>
    </div>
    


    );

}

export default PicturesPage;