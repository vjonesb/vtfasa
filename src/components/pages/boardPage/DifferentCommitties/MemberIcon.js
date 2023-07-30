/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * pass in any picture that you want to be the icon
 * of the member you want to be portrayed
 */
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