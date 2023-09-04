/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 * send in an array of sources and this will then take in those elements
 * and display the images, links, and titles that is defined.
 * 
 * This will all be displayed in a Masonry viewport
 * with the overflow being scrollable.
 * 
 * The custom Masonry card is custom colored.
 * The custom card is custom colored as well.s
 */


import { Card, CardContent, CardMedia, Typography, Paper, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from '@mui/system';
import Masonry from '@mui/lab/Masonry';
import './Scrollbar.css';



const ResourcesTemplate = (props) => {
    
    const CustomCard = styled(Card)(({ theme }) => ({
        background: props.color,
        position: 'relative',
        paddingTop: '0.5%',
        [theme.breakpoints.down('xs')] : {
            paddingTop: '100%',
        }
    }));
    const customStyles = {
        textDecoration: 'none', // Remove underline
      };

   

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    
    return(
        <Grid container xs = {12}>
                <Grid item xs = {2} display="flex" justifyContent="center" alignItems="center">
                    {/* <Typography variant="h3">
                        {props.section}
                    </Typography> */}
                </Grid>
                {/* <Divider orientation="vertical" flexItem/> */}
                <Grid item xs = {8}>
                    <Paper className = "custom-scrollbar"sx={{ maxHeight: '400px', overflowY: 'auto', marginLeft: '20px' }}>
                        <div style ={{marginLeft: 30, marginTop: 30}}>
                        <Masonry columns={2} spacing={4}>
                            {props.images.map((item, i) => (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" style = {customStyles}>
                                {isSmallScreen ? (
                                    <CustomCard elevation = {6}>
                                        <CardMedia sx = {{height: 30}}
                                        image = {item.img}/>
                                        <Typography variant = "h6" ml = {1}>
                                            {item.title}
                                        </Typography>
                                    </CustomCard>

                                ) : (
                                    <CustomCard elevation={6}>
                                    <CardMedia sx = {{height: 140}}
                                    image = {item.img}/>
                                    <CardContent>
                                        <Typography variant="h6">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CustomCard>  

                                )}
                                
                                </a>
                            ))}
                        </Masonry>
                        </div>
                    </Paper>
                </Grid>
        </Grid>


    );

}

export default ResourcesTemplate;