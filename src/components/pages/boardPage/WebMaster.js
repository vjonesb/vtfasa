import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Paper, Typography, useMediaQuery } from "@mui/material";
import backgroundImage from './BackgroundPic.png';


import WebMasterChair1 from '../../../pictures/OfficerBoard/WebMasterChair1.png';
import WebMasterChair2 from '../../../pictures/OfficerBoard/WebMasterChair2.png';

import Grid from "@mui/material/Unstable_Grid2/Grid2";


const BackgroundImageCard = styled(Card)(({theme}) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    padding: theme.spacing(1),
  // Add other styles as needed for the Paper component
}));

function WebMaster() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return(
        <Grid container xs = {12} direction={'row'} spacing={2}>
            <Grid item xs = {2}/>
            <Grid item xs>
                <BackgroundImageCard>
                    <a href="https://www.instagram.com/patrick.vyn/" target="_blank" rel="noopener noreferrer"
                    >
                    <CardContent>
                        <CardMedia 
                        component="img"
                        src={WebMasterChair1}
                        alt="Image"
                        style={{
                            objectFit: 'contain',
                            }}
                        />
                        {isSmallScreen ? (
                            <div/>
                        ) : (
                            <Paper sx = {{borderRadius: '0px'}}>
                                <Typography ml={1} variant="body2" align="center"
                                >
                                    Name: Patrick Vyn Badiang <br />
                                    Grade: Sophomore <br />
                                    Role: Web Developer
                                </Typography>
                            </Paper>

                        )}
                        
                         
                    </CardContent>
                    </a>
                    
                </BackgroundImageCard>
            </Grid>
            <Grid item xs>
                <BackgroundImageCard>
                    <a href = "https://www.instagram.com/nessa.fna/" target="_blank" rel="noopener noreferrer">
                    <CardContent>
                        <CardMedia 
                        component="img"
                        src={WebMasterChair2}
                        alt="Image"
                        style={{
                            objectFit: 'contain',
                            }}
                        />
                        {isSmallScreen ? (
                            <div/>
                        ) : (
                            <Paper sx = {{borderRadius: '0px'}}>
                                <Typography ml={1} variant="body2" align="center">
                                    Name: Vanessa Jones <br />
                                    Grade: Sophomore <br />
                                    Role: Web Developer
                                </Typography>

                            </Paper>

                        )}
                        
                         
                    </CardContent>
                    </a>
                </BackgroundImageCard>
            </Grid>
            <Grid item xs = {2}/>
                
        </Grid>
    );
}

export default WebMaster;