/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * Includes the embedded sources from both instagram and youtube
 */

import { Button, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Instagram from '@mui/icons-material/CameraAltOutlined';
import Youtube from '@mui/icons-material/SubscriptionsOutlined';


const Events = (props) => {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const instagramFitFasa = 'https://www.instagram.com/p/Cw1fbimsgQ-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
    const instagramFasa = 'https://www.instagram.com/p/Cw0YtwHs5uS/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
    const youtube = 'https://youtu.be/fxG30pJZt1Q';


    return (
        <Grid container xs = {12} mt ={5} spacing = {1}>
            <Grid item xs = {1}/>
            <Grid item xs>
                    <Grid item xs>
                        <Card sx = {{borderRadius: '30px'}}>
                            {isSmallScreen ? (
                                <Button href= {instagramFasa} target="_blank" rel="noopener" 
                                startIcon = {<Instagram/>}>
                                <Typography align="center">
                                    Latest Instagram Post
                                </Typography>
                                </Button>
                            ) : (
                                <CardContent style = {{overflow: 'auto', height:500}}>
                                <div 
                                style={{ display: 'flex', justifyContent: 'center' }}>
                                    <InstagramEmbed url= {instagramFasa}                   
                                style={{
                                    maxWidth: 550,           
                                }}
                                    width="100%"
                                    align = 'center' />
                                    </div>
                                </CardContent>
                            )}
                           
                        </Card>
                </Grid>
                
                
            </Grid>

            <Grid item xs = {4}>
            <Card sx = {{borderRadius: '30px'}}>
                {isSmallScreen ? (
                    <Button href= {youtube} target="_blank" rel="noopener" 
                    startIcon = {<Youtube/>}>
                    <Typography align="center">
                        Latest Youtube Post
                    </Typography>
                    </Button>
                ) : (
                    <CardContent>
                        <YouTubeEmbed url={youtube}
                        height = {460}
                        width = '100%'
                        align = 'center' />
                    
                    </CardContent>

                )}
                    
                </Card>
                
                
            </Grid>

            <Grid item xs>
                    <Grid item xs>
                        <Card sx = {{borderRadius: '30px'}}>
                            {isSmallScreen ? (
                                <Button href= {instagramFitFasa} target="_blank" rel="noopener" 
                                startIcon = {<Instagram/>}>
                                <Typography align="center">
                                    Latest FitxFasa Post
                                </Typography>
                                </Button>
                            ) : (
                                <CardContent style = {{overflow: 'auto', height:500}}>
                                <div 
                                style={{ display: 'flex', justifyContent: 'center' }}>
                                    <InstagramEmbed url= {instagramFitFasa}                   
                                style={{
                                    maxWidth: 550,           
                                }}
                                    width="100%"
                                    align = 'center' />
                                    </div>
                                </CardContent>
                            )}
                           
                        </Card>
                </Grid>
                
                
            </Grid>
            
            <Grid item xs = {1}/>
            
        </Grid>
        
        


    );

}

export default Events;