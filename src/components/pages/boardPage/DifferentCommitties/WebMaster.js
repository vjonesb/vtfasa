/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is the webmasters section, uses a custom background image
 * displays name year and role if screen is big enough
 */
import { Card, CardMedia, useMediaQuery } from "@mui/material";


import WebMasterChair1 from '../../../../pictures/OfficerBoard/WebMasterPhoto1.png';
import WebMasterChair2 from '../../../../pictures/OfficerBoard/WebMasterPhoto2.png';

import Grid from "@mui/material/Unstable_Grid2/Grid2";




function WebMaster() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return(
        <div>
            {isSmallScreen ? (
                <Grid container xs = {12} direction={'row'} spacing={2}>
                <Grid item xs = {2}/>
                <Grid item xs = {8}>
                    <Card>
                        <a href="https://www.instagram.com/patrick.vyn/" target="_blank" rel="noopener noreferrer"
                        
                       >
                        <CardMedia 
                            component="img"
                            src={WebMasterChair1}
                            alt="Image"
                            style={{
                                objectFit: 'contain',
                                }}
                            />
                        
                        </a>
                        
                    </Card>
                </Grid>
                <Grid item xs = {2}/>
                <Grid item xs = {2}/>
    
                <Grid item xs = {8}>
                    <Card>
                        <a href = "https://www.instagram.com/nessa.fna/" target="_blank" rel="noopener noreferrer"
                        >
                            <CardMedia 
                            component="img"
                            src={WebMasterChair2}
                            alt="Image"
                            style={{
                                objectFit: 'fit'
                                }}
                            />
                        
                        </a>
                    </Card>
                </Grid>
                <Grid item xs = {2}/>
                    
            </Grid>
            ) : (
                <Grid container xs = {12} direction={'row'} spacing={2}>
                <Grid item xs = {1}/>
                <Grid item xs = {5}>
                    <Card>
                        <a href="https://www.instagram.com/patrick.vyn/" target="_blank" rel="noopener noreferrer"
                        
                       >
                        <CardMedia 
                            component="img"
                            src={WebMasterChair1}
                            alt="Image"
                            style={{
                                objectFit: 'contain',
                                }}
                            />
                        
                        </a>
                        
                    </Card>
                </Grid>
    
                <Grid item xs = {5}>
                    <Card>
                        <a href = "https://www.instagram.com/nessa.fna/" target="_blank" rel="noopener noreferrer"
                        >
                            <CardMedia 
                            component="img"
                            src={WebMasterChair2}
                            alt="Image"
                            style={{
                                objectFit: 'fit'
                                }}
                            />
                        
                        </a>
                    </Card>
                </Grid>
                <Grid item xs = {1}/>
                    
            </Grid>
            )}

        </div>
        
    );
}

export default WebMaster;