/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 *  Is called whenever there is a new event
 *  is called by PicturesPage and takes in three props
 *  - Cover, Link, and Event
 *  These are then displayed depending on the screen size
 */

import { Card, CardMedia, Typography, useMediaQuery } from "@mui/material";


const NewPictureSet = (props) => {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const customStyles = {
        textDecoration: 'none', // Remove underline
      };

    return(
        <a href={props.link} target="_blank" rel="noopener noreferrer"
        style = {customStyles}>
        <Card elevation = {6}>
            {isSmallScreen ? (
                <div>
                <CardMedia sx = {{height: 200}}
                image = {props.cover}/>
                <Typography variant = "h5" ml = {1} align="center">
                    {props.event}
                </Typography>
                </div>

            ) : ( <div>
                <CardMedia sx = {{height: 400}}
                image = {props.cover}/>
                <Typography variant = "h6" ml = {1} align="center">
                    {props.event}
                </Typography>
                </div>
            )}
            
        </Card>
        </a>
    );
}

export default NewPictureSet;