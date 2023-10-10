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
import NewPictureSet from "./NewPictureSet";



const FASAFormPage = (props) => {

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return(

        <div style = {{marginLeft: 30, marginTop: 20}}>
        {isMediumScreen ? (
                <Masonry columns={1} spacing={4}>
                {props.forms.map((item, i) => (
                <NewPictureSet cover = {item.cover}
                event = {item.event}
                link = {item.link}/>
                ))}

                
                

            </Masonry>

              ): (<Masonry columns={3} spacing={4}>
                {props.forms.map((item, i) => (
                <NewPictureSet cover = {item.cover}
                event = {item.event}
                link = {item.link}/>
                ))}
                
                

            </Masonry>)}
            

            </div>
        
        
    )

}

export default FASAFormPage;