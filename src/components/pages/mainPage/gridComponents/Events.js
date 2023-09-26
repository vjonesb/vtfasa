/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * Includes the embedded sources from both instagram and youtube
 */

import {useMediaQuery } from "@mui/material";

import BigScreenEvents from "./BigScreenEvents";
import SmallScreenEvents from "./SmallScreenEvents";

function Events() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const instagramFitFasa = 'https://www.instagram.com/p/CxgNHM_ux3U/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
    const instagramFasa = 'https://www.instagram.com/p/CxoZhIYvBTQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
    const youtube = 'https://youtu.be/IsL0bMqfxP4?si=T-2LxWgHGWIxg8lI';


    return (
        <div>
            {isSmallScreen ? (
                <SmallScreenEvents 
                instagramFitFasa = {instagramFitFasa}
                instagramFasa = {instagramFasa}
                youtube = {youtube}/>
            ) : (
                <BigScreenEvents 
                instagramFitFasa = {instagramFitFasa}
                instagramFasa = {instagramFasa}
                youtube = {youtube}/>
            )}
            

        </div>
        
        
        


    );

}

export default Events;