/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 *  Is the mainPage for FASA
 *  When there is a new link here is the following procedure:
 *   - Make a new "NewPictureSet" element
 *   - Define the props
 *      - Cover Photo
 *      - Link Name
 *      - Link (This is the google form or any form link)
 */
import {useMediaQuery } from "@mui/material";


import { Masonry } from "@mui/lab";
import NewPictureSet from "../picturesPage/NewPictureSet";



function FASAFormPage() {

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));


    return(

        <div style = {{marginLeft: 30, marginTop: 20}}>
        {isMediumScreen ? (
                <Masonry columns={1} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/Bonfire_RideShare.png"
                event = "Bonfire Rideshare Form"
                link = "https://docs.google.com/forms/d/e/1FAIpQLSf3gVlovmVT-OggmbLnCjL4SW55G-hE-bQVuAvh-MZqTFLiWg/viewform"/>
                <NewPictureSet cover = "/pictures/forms/Ading_App.png"
                event = "Ading [Little] Application"
                link = "https://docs.google.com/document/d/1a4HXxyljc0yIfsrFQmmLmpffzOkgJ0Aq6rALWS_2Wms/edit?usp=sharing"/>
                <NewPictureSet cover = "/pictures/forms/Ate-Kuya_App.png"
                event = "Ate/Kuya [Big] Application"
                link = "https://docs.google.com/document/d/1tJ-0kT4hVSAT6BGVnLjcVlfP-I9L-R2jGit7rVSc_lQ/edit?usp=sharing"/>
                
                
                

            </Masonry>

              ): (<Masonry columns={3} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/Bonfire_RideShare.png"
                event = "Bonfire Rideshare Form"
                link = "https://docs.google.com/forms/d/e/1FAIpQLSf3gVlovmVT-OggmbLnCjL4SW55G-hE-bQVuAvh-MZqTFLiWg/viewform"/>
                <NewPictureSet cover = "/pictures/forms/Ading_App.png"
                event = "Ading [Little] Application"
                link = "https://docs.google.com/document/d/1a4HXxyljc0yIfsrFQmmLmpffzOkgJ0Aq6rALWS_2Wms/edit?usp=sharing"/>
                <NewPictureSet cover = "/pictures/forms/Ate-Kuya_App.png"
                event = "Ate/Kuya [Big] Application"
                link = "https://docs.google.com/document/d/1tJ-0kT4hVSAT6BGVnLjcVlfP-I9L-R2jGit7rVSc_lQ/edit?usp=sharing"/>
                
                
                

            </Masonry>)}
            

            </div>
        
        
    )

}

export default FASAFormPage;