/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * is the oBoard manager with a new row every 7 members
 */

import { useMediaQuery } from "@mui/material";

import SmallOfficerBoard from "./SmallOfficerBoard";
import BigOfficerBoard from "./BigOfficierBoard";

function OfficerBoard() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <div>

        
        {isSmallScreen ? (
            <SmallOfficerBoard/>
        ) : (
            <BigOfficerBoard/>

        )}
        </div>
        
    );
}

export default OfficerBoard;