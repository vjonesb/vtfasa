import { Typography, Paper, Box } from "@mui/material";
import { styled } from '@mui/system';
import Divider from "../../Divider";
import BottomFooter from "../mainPage/gridComponents/BottomFooter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Article from "./Article";


const CustomPaper = styled(Paper)(({ theme }) => ({
    background: '#7393B3',    
  }));


function ConstitutionPage() {

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

   

    return(
        <div>
            <div style={styles.container} >
                <img
                  src='/pictures/fasa_pic.png' // Replace with the actual path to your image
                  alt = 'cover'
                  style={styles.image}/>
                <CustomPaper style={styles.paper}>
                  <Typography variant="h3"
                  sx = {{
                      fontSize: {
                        xs: '1rem',   // Extra-small devices (phones)
                        sm: '1.5rem', // Small devices (tablets)
                        md: '2rem',   // Medium devices (desktops)
                        lg: '3rem',   // Large devices (large desktops)
                      }
                  }}>
                    Constitution
                  </Typography>
                </CustomPaper>
              </div>
              <div style = {{marginTop: '50px'}}>
                <Divider color = "black"/>
                <Grid container spacing={2} direction={'column'}>
                    <Grid item>
                        <Article  title = "Article I" path = '/textfiles/Constitution/ArticleI.txt'/>
                    </Grid>
                    <Grid item>
                        <Article  title = "Article II" path = '/textfiles/Constitution/ArticleII.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article III (Executive Officers)"
                        path = '/textfiles/Constitution/ArticleIII.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article IV (Officers)"
                        path = '/textfiles/Constitution/ArticleIV.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article V (Meetings)"
                        path = '/textfiles/Constitution/ArticleV.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article VI (Impeachment)"
                        path = '/textfiles/Constitution/ArticleVI.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article VII (Rhonyll Seballos Scholarship)"
                        path = '/textfiles/Constitution/ArticleVII.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article VIII"
                        path = '/textfiles/Constitution/ArticleVIII.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article IX (Allegiance)"
                        path = '/textfiles/Constitution/ArticleIX.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article X"
                        path = '/textfiles/Constitution/ArticleX.txt'/>
                    </Grid>
                    <Grid item>
                        <Article title = "Article XI (The Executive Council and Standing Committees)"
                        path = '/textfiles/Constitution/ArticleXI.txt'/>
                    </Grid>

                </Grid>
                
              </div>
              
              

              <Paper sqaure sx = {{width: 'full'}}>
                <Box sx = {{height: '20px'}} mt = {10}/>
                <Divider color = 'green'/>
                <BottomFooter/>
            <Box sx = {{height: '30px'}}/>
          </Paper>
        </div>
    );
}

export default ConstitutionPage;