/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * Includes the embedded sources from both instagram and youtube
 */

import { Card, CardContent } from "@mui/material";
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import Grid from "@mui/material/Unstable_Grid2/Grid2";



const Events = (props) => {


    return (
        <Grid container xs = {12} mt ={5}>
            <Grid item xs>
                    <Grid item xs>
                        <Card sx = {{borderRadius: '0px'}}>
                            <CardContent style = {{overflow: 'auto', height:500}}>
                            <div 
                            style={{ display: 'flex', justifyContent: 'center' }}>
                                <InstagramEmbed url="https://www.instagram.com/p/Crb6yT_M5TH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="                   
                            style={{
                                maxWidth: 550,           
                            }}
                            width="100%"
                                align = 'center' />
                                </div>

                            
                            </CardContent>
                        </Card>
                </Grid>
                
                
            </Grid>
            <Grid item xs = {6}>
            <Card sx = {{borderRadius: '0px'}}>
                    <CardContent>
                        <YouTubeEmbed url="https://youtu.be/fxG30pJZt1Q"
                        height = {460}
                        width = '100%'
                        align = 'center' />
                    
                    </CardContent>
                </Card>
                
                
            </Grid>
            
        </Grid>
        
        


    );

}

export default Events;