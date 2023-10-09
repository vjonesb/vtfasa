import { Card, CardContent } from "@mui/material";
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import Grid from "@mui/material/Unstable_Grid2/Grid2";



const BigScreenEvents = (props) => {
    

    return(
        <Grid container xs = {12} mt ={5} spacing = {1}>
            
            <Grid item xs = {1}/>
            <Grid item xs>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {props.instagramFasa}                   
                    style={{
                        maxWidth: 550,           
                    }}
                        width="100%"
                        align = 'center' />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs = {4}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent>
                        <YouTubeEmbed url={props.youtube}
                        height = {460}
                        width = '100%'
                        align = 'center' />
                    </CardContent>
                </Card>
                
                
            </Grid>

            <Grid item xs>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {props.instagramFitFasa}                   
                    style={{
                        maxWidth: 550,           
                    }}
                        width="100%"
                        align = 'center' />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        
                
            
            <Grid item xs = {1}/>
            
        </Grid>
        

    );

}

export default BigScreenEvents;