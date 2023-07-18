import NewMember from "../CardWithDropDown";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const SportsChairs = (props) => {
    const chair1 = props.chair1;
    const chair2 = props.chair2;

    return (<Grid container xs>
         <Grid item xs>
            <NewMember picture = {chair1}
            title = "Delfin Lagman"
            description = "The new Internal Vice President for our 2023-2024 school year!"/>
        </Grid>
        <Grid item xs>
            <NewMember picture = {chair2}
            title = "Alexa Marticio"
            description = "The new External Vice President for our 2023-2024 school year!"/>
         </Grid>
    </Grid>

    );

}

export default SportsChairs;