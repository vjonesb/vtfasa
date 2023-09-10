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
                <NewPictureSet cover = "/pictures/forms/CommitteeHead.png"
                event = "Committee Head Interest Form"
                link = "https://docs.google.com/forms/d/e/1FAIpQLSf2ueN986imLlb6yHJa_dmilLzKTHu0o-Ox9Dxe57oMkk4DoA/viewform?pli=1"/>
                
                

            </Masonry>

              ): (<Masonry columns={3} spacing={4}>
                <NewPictureSet cover = "/pictures/forms/CommitteeHead.png"
                event = "Committee Head Interest Form"
                link = "https://docs.google.com/forms/d/e/1FAIpQLSf2ueN986imLlb6yHJa_dmilLzKTHu0o-Ox9Dxe57oMkk4DoA/viewform?pli=1"/>
                

            </Masonry>)}
            

            </div>
        
        
    )

}

export default FASAFormPage;