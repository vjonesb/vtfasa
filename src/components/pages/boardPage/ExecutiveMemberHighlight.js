/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * Dynamically receives the images and puts a bio
 */

import { CardMedia, CardContent,Box, Typography, Paper } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from '@mui/system';


const CustomBioPaper = styled(Paper)(({ theme }) => ({
  background: '#E29CA2',
  width: '100%',
  height: '100%',
  display: 'flex',
  borderRadius:'10px',
  alignItems: 'center',
}));



const ExecutiveMemberHighlight = (props) => {
    const styles = (theme) => ({
        card: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%', // Ensure the card takes full height (assuming the parent container provides the height)
        },
        content: {
          flexGrow: 1, // Allow the content to expand and fill the remaining height
        },
      });
    return (
        <Grid container>
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
        <Grid item xs>
          <CardContent className={styles.content}>
            <Typography variant="h5" component="h2">
              {props.position}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.name}
            </Typography>
          </CardContent>
          <Box>
          <Grid container direction={'row'} alignItems="stretch">
            <Grid item xs/>
            <Grid item xs = {11}>
            <CustomBioPaper elevation={2}>
                <Typography variant='body2'
                ml={2}
                mt={1}
                mb= {1}>
                  Major: {props.major}<br/>
                  Minor: {props.minor}<br />
                  Favorite FASA Memory: {props.memory}<br />
                  Hobbies: {props.hobbies}<br/> <br />

                  Will most likely {props.mL} in 5 years
                </Typography>
              </CustomBioPaper>
            </Grid>
            <Grid item xs/>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    );
}

export default ExecutiveMemberHighlight;