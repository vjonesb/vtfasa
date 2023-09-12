/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is the slides page for the site, contains all slides
 */
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { Masonry } from "@mui/lab";
import NewPictureSet from "../picturesPage/NewPictureSet";
import Divider from "../../Divider";
import BottomFooter from "../mainPage/gridComponents/BottomFooter";



function SlidesPage() {const styles = {
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
                Slides
              </Typography>
            </Paper>
          </div>
            <div style = {{marginLeft: 30, marginTop: 100}}>
              {isMediumScreen ? (
                <Masonry columns={1} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/AASUCultureShow.png"
                event = "AASU Culture Show"
                link = "https://www.canva.com/design/DAFuPXoFqhQ/aNkIqAluMG_1EwA8KqjgvQ/view?utm_content=DA[…]mpaign=designshare&utm_medium=link&utm_source=publishsharelink"/>
                

            </Masonry>

              ): (<Masonry columns={3} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/AASUCultureShow.png"
                event = "AASU Culture Show"
                link = "https://www.canva.com/design/DAFuPXoFqhQ/aNkIqAluMG_1EwA8KqjgvQ/view?utm_content=DA[…]mpaign=designshare&utm_medium=link&utm_source=publishsharelink"/>
                
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

export default SlidesPage;