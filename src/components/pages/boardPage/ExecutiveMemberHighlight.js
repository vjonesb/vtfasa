/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * Dynamically receives the images and puts a bio
 */

import { CardMedia } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";



const ExecutiveMemberHighlight = (props) => {
    
    return (
        <Grid container xs = {12}>
        {/* Image */}
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={props.image}
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        {/* Text */}
        <Grid item xs = {6}>
         <CardMedia
            component="img"
            image={props.imageText}
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          </Grid>
      </Grid>
    );
}

export default ExecutiveMemberHighlight;