/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * After declaring the header text, it calls ResourcesTemplate
 * and passes an array of elements it wants to be displayed below it.
 */


import { Typography, Paper, Box } from "@mui/material";

import BottomFooter from "../mainPage/gridComponents/BottomFooter";
import ResourcesTemplate from "./ResourcesTemplate";
import HealthData from "./HealthData.json";
import AdvocacyData from "./AdvocacyData.json";
import LanguageData from "./LanguageData.json";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomDivider from '../../SmallerDivider';
import Divider from '../../Divider';


function ResourcesPage() {

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
    };
    
    return(
        <div>
            <div style={styles.container} >
                <img
                  src='/pictures/fasa_pic.png' // Replace with the actual path to your image
                  alt = 'cover'
                  style={styles.image}/>
              </div>
              <Typography variant="h3" align="center">
                Mental Health
              </Typography>
              <CustomDivider color = "green"/>

              
              <Grid container direction={'column'} spacing={4}>
                <Grid item>
                    <ResourcesTemplate section = "Health"
                        color = "#00A36C"
                        images = {HealthData}/>
                </Grid>
                <Grid item>
                    <Typography variant="h3" align="center">
                        Other Organizations for Advocacy
                    </Typography>
                    
                    <CustomDivider color = "#FFBF00"/>
                        
                        
                    <ResourcesTemplate section = "Advocacy"
                        color = "#FFBF00"
                        images = {AdvocacyData}/>

                </Grid>
                <Grid item>
                    <Typography variant="h3" align="center">
                        Links to learn our language: Tagalog!
                    </Typography>
                    <CustomDivider color = "red"/>
                    <ResourcesTemplate 
                    color = "#AA4A44"
                        images = {LanguageData}/>
                </Grid>
              

              
              
              </Grid>

              
              <Paper sqaure sx = {{width: 'full'}}>
                <Box sx = {{height: '20px'}} mt = {10}/>
                <Divider color = '#224343'/>
                    <BottomFooter/>
                <Box sx = {{height: '30px'}}/>
            </Paper>

        </div>
    );
}

export default ResourcesPage;