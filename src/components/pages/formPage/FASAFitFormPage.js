/**
 * author: Patrick Vyn Badiang
 * 
 * description: 
 *  Is the mainPage for FitxFASA
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



function FASAFitFormPage() {

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));


    return(

        <div style = {{marginLeft: 30, marginTop: 20}}>
        {isMediumScreen ? (
                <Masonry columns={1} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/FitFASA.png"
                event = "Corec Ultimate Frisbee Rec IM Sign Up"
                link = "https://www.imleagues.com/spa/account/ssoredirect?schoolId=d0d303ce0a014bdb9a1972f7d41401b9&redirecturl=https:%2F%2Fwww.imleagues.com%2Fspa%2Fteam%2Fzzz1143049927811661824%2Fhome"/>
                <NewPictureSet cover = "/pictures/forms/FitFASA.png"
                event = "Mens Comp Flag Football IM Sign Up"
                link = "https://www.imleagues.com/spa/account/ssoredirect?schoolId=d0d303ce0a014bdb9a1972f7d41401b9&redirecturl=https:%2F%2Fwww.imleagues.com%2Fspa%2Fteam%2Fzzz1143043003170947072%2Fhome"/>
                <NewPictureSet cover = "/pictures/forms/FitFASA.png"
                event = "Corec Ultimate Frisbee Rec IM Sign up"
                link = "https://www.imleagues.com/spa/account/ssoredirect?schoolId=d0d303ce0a014bdb9a1972f7d41401b9&redirecturl=https:%2F%2Fwww.imleagues.com%2Fspa%2Fteam%2Fzzz1143049927811661824%2Fhome"/>
                
                

            </Masonry>

              ): (<Masonry columns={3} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/FitFASA.png"
                event = "Corec Ultimate Frisbee Rec IM Sign up"
                link = "https://www.imleagues.com/spa/account/ssoredirect?schoolId=d0d303ce0a014bdb9a1972f7d41401b9&redirecturl=https:%2F%2Fwww.imleagues.com%2Fspa%2Fteam%2Fzzz1143049927811661824%2Fhome"/>
                

            </Masonry>)}
            

            </div>
        
        
    )

}

export default FASAFitFormPage;