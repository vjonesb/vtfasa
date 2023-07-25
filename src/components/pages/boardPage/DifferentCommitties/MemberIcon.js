import NewMember from "../CardWithDropDown";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const MemberIcon = (props) => {
    const chair = props.chair;

    return (
        <Grid container xs>
            <Grid item>
                <NewMember picture = {chair} link = {props.link}/>
            </Grid>
        </Grid>

    );

}

export default MemberIcon;