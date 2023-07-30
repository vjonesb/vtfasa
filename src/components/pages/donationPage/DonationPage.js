import { Box, Button, Paper, Typography } from "@mui/material";
import Divider from "../../Divider";
import BottomFooter from "../mainPage/gridComponents/BottomFooter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import NewStep from "./NewStep";

function DonationPage(){

    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            marginTop: '0px',
          },
          image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            marginTop: '100px'
          },
          paper: {
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'fit-content',
            padding: '20px',
          },
    };

    return (
        <div>
            <div style={styles.container} >
                <img
                  src='/pictures/fasa_pic.png' // Replace with the actual path to your image
                  alt = 'cover'
                  style={styles.image}/>
                <Paper style={styles.paper}>
                  <Typography variant="h3"
                  sx = {{
                      fontSize: {
                        xs: '1rem',   // Extra-small devices (phones)
                        sm: '1.5rem', // Small devices (tablets)
                        md: '2rem',   // Medium devices (desktops)
                        lg: '3rem',   // Large devices (large desktops)
                      }
                  }}>
                    Donate
                  </Typography>
                </Paper>
              </div>
                  <div style = {{marginTop: '80px'}}>
                    <Grid container direction={"row"} spacing = {2} justifyContent={'center'}>
                        <Grid item xs = {12}>
                            <Grid container xs justify="center" alignItems="center">
                                <Grid item xs/> 
                                <Grid item>
                                    <Button variant="contained" color = "secondary"
                                    target="_blank" rel="noopener"
                                    href = "https://apps.es.vt.edu/onlinegiving/gift?fund=873181&amount=25.00&frequency=onetime&utm_source=Popup_WebApps&utm_medium=Web&utm_campaign=GivingSite&campaign=AF23171AQV1D748W">
                                        Donation Site
                                    </Button>
                                </Grid>
                                <Grid item xs/>
                            </Grid>
                        </Grid>
                        <Grid item xs = {12}>
                            <NewStep img = "/pictures/donating/Step1.png"
                            title = "Step 1"
                            body = " Select how often you want to donate, along with the amount you would like to donate."/>
                         </Grid>
                        <Grid item xs = {12}>
                            <NewStep img = "pictures/donating/Step2.png"
                            title = "Step 2"
                            body = "Select 'Student Organizations' as the area"/>
                    
                        </Grid>
                        <Grid item xs = {12}>
                            <NewStep img = "pictures/donating/Step3.png"
                            title = "Step 3"
                            body = "Add the gift to your cart and fill out the personal information that pops up below!"/>
                    
                        </Grid>
                        
                        <Grid item xs>
                            <Grid container xs justify="center" alignItems="center">
                                <Grid item xs/> 
                                <Grid item>
                                    <Button variant="contained" color = "secondary"
                                        target="_blank" rel="noopener"
                                        href = "https://apps.es.vt.edu/onlinegiving/gift?fund=873181&amount=25.00&frequency=onetime&utm_source=Popup_WebApps&utm_medium=Web&utm_campaign=GivingSite&campaign=AF23171AQV1D748W">
                                            Donation Site
                                    </Button>
                                </Grid>
                                <Grid item xs/>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    
                    
                  </div>
             

            
            <Paper sqaure sx = {{width: 'full'}}>
                <Box sx = {{height: '20px'}} mt = {10}/>
                <Divider color = '#224343'/>
                <BottomFooter/>
            <Box sx = {{height: '30px'}}/>
          </Paper>
        </div>
        
    );

}

export default DonationPage;