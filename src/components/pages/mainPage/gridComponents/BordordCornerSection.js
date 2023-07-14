/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * calls the bordordCornerText class and puts in the section that we need
 */

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BordordConerText from "./BordordConerText";

const BordordConerSection = (props) => {

    return(
        <Grid container /** grid underneath image */
        spacing={2}
        mb={2}
        mt = {2}
        >
      <Grid xs = {1}/>
      <Grid xs>
        <BordordConerText inside = {props.inside} />
      </Grid> 
      <Grid xs = {1}/>
    </Grid>
    )

   

}

export default BordordConerSection;