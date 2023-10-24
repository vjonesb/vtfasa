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

    const instagramFitFasa = 'https://www.instagram.com/p/Cym1ROnMBzt/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
    const instagramFasa = 'https://www.instagram.com/p/Cygbew4uG20/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
    const youtube = 'https://www.youtube.com/watch?v=e_wgUGfm9tE';


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