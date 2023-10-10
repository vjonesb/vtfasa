/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 *  Is the mainPage for pictures
 *  When there is a new event here is the following procedure:
 *   - Make a new "NewPictureSet" element
 *   - Define the props
 *      - Cover Photo
 *      - Event Name
 *      - Link (This is the google folder linke)
 */


import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Divider from "../../Divider";
import BottomFooter from "../mainPage/gridComponents/BottomFooter";
import NewPictureSet from "./NewPictureSet";
import { Masonry } from "@mui/lab";

import PicturesData from './PicturesData.json';

function PicturesPage(){

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

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));


    return (
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
                <div style = {{marginLeft: 30, marginTop: 100}}>
                  {isMediumScreen ? (
                    <Masonry columns={1} spacing={4}>
                    {PicturesData.map((item, i) => (
                <NewPictureSet cover = {item.cover}
                event = {item.event}
                link = {item.link}/>
                ))}
                    
                </Masonry>

                  ): (<Masonry columns={3} spacing={4}>
                    {PicturesData.map((item, i) => (
                <NewPictureSet cover = {item.cover}
                event = {item.event}
                link = {item.link}/>
                ))}
                    

                </Masonry>)}
                

                </div>
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