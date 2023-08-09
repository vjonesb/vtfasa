/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * is the oBoard manager with a new row every 7 members
 */
import Grid from '@mui/material/Unstable_Grid2/Grid2';
//Sports chairs
import SportsChair1 from '../../../pictures/OfficerBoard/SportsChair1.png';
import SportsChair2 from '../../../pictures/OfficerBoard/SportsChair2.png';

//Fundraising chairs
import FundRaisingChair1 from '../../../pictures/OfficerBoard/FundraisingChair1.png';
import FundRaisingChair2 from '../../../pictures/OfficerBoard/FundraisingChair2.png';
import FundRaisingChair3 from '../../../pictures/OfficerBoard/FundraisingChair3.png';

//Service chairs
import ServiceChair1 from '../../../pictures/OfficerBoard/ServiceChair1.png';
import ServiceChair2 from '../../../pictures/OfficerBoard/ServiceChair2.png';
import ServiceChair3 from '../../../pictures/OfficerBoard/ServiceChair3.png';

//Promo chairs
import PromoChair1 from '../../../pictures/OfficerBoard/PromoChair1.png';
import PromoChair2 from '../../../pictures/OfficerBoard/PromoChair2.png';

//Culture Chairs
import CultureChair1 from '../../../pictures/OfficerBoard/CultureChair1.png';
import CultureChair2 from '../../../pictures/OfficerBoard/CultureChair2.png';

//Hospitality Chairs
import HospitalityChair1 from '../../../pictures/OfficerBoard/HospitalityChair1.png';
import HospitalityChair2 from '../../../pictures/OfficerBoard/HospitalityChair2.png';

//Event Chairs
import EventChair1 from '../../../pictures/OfficerBoard/EventsChair1.png';
import EventChair2 from '../../../pictures/OfficerBoard/EventsChair2.png';
import EventChair3 from '../../../pictures/OfficerBoard/EventsChair3.png';

//D7 Chairs
import D7Chair1 from '../../../pictures/OfficerBoard/D7Chair1.png';
import D7Chair2 from '../../../pictures/OfficerBoard/D7Chair2.png';

//Historian
import HistorianChair1 from '../../../pictures/OfficerBoard/HistorianChair1.png';
import HistorianChair2 from '../../../pictures/OfficerBoard/HistorianChair2.png';
import MemberIcon from "./DifferentCommitties/MemberIcon.js";

function BigOfficerBoard() {

    return (
        <Grid container xs = {12} justifyContent="center" >
    <Grid item xs = {2}/>
    <Grid container xs = {8}>
        <MemberIcon chair = {SportsChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {SportsChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {FundRaisingChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {FundRaisingChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {FundRaisingChair3}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {PromoChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {PromoChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
    </Grid>
    <Grid item xs = {2}/>
    <Grid item xs = {2}/>
    <Grid container xs = {8}>
        <MemberIcon chair = {EventChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {EventChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {EventChair3}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {D7Chair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {D7Chair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {HistorianChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {HistorianChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
    </Grid>
    <Grid item xs = {2}/>
    <Grid item xs = {2}/>
    <Grid container xs = {8}>
        <MemberIcon chair = {ServiceChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {ServiceChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {ServiceChair3}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {CultureChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {CultureChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {HospitalityChair1}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
        <MemberIcon chair = {HospitalityChair2}
         link = "https://www.instagram.com/p/Crv8ryduWXi/?img_index=1"
         />
    </Grid>
    <Grid item xs = {2}/>
    <Grid item xs = {2}/>
  </Grid>


    );
}

export default BigOfficerBoard;