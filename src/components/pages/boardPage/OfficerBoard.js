
import NewMember from "./CardWithDropDown";
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
import SportsChairs from "./DifferentCommitties/SportsChairs.js";

function OfficerBoard() {

    return (
        <Grid container xs = {12} justifyContent="center">
    <Grid item xs = {2}/>
    <Grid container xs = {8}>
        <SportsChairs chair1 = {SportsChair1} chair2 = {SportsChair2}/>
        <SportsChairs chair1 = {PromoChair1} chair2 = {PromoChair2}/>
        <SportsChairs chair1 = {CultureChair1} chair2 = {CultureChair2}/>
        <SportsChairs chair1 = {HospitalityChair1} chair2 = {HospitalityChair2}/>
    </Grid>
    <Grid item xs = {2}/>
    <Grid item xs = {2}/>
    <Grid container xs = {8}>
        <SportsChairs chair1 = {D7Chair1} chair2 = {D7Chair2}/>
        <SportsChairs chair1 = {HistorianChair1} chair2 = {HistorianChair2}/>
        <SportsChairs chair1 = {CultureChair1} chair2 = {CultureChair2}/>
        <SportsChairs chair1 = {HospitalityChair1} chair2 = {HospitalityChair2}/>
    </Grid>
    <Grid item xs = {2}/>
  </Grid>


    );
}

export default OfficerBoard;