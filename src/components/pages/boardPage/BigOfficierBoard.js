/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * is the oBoard manager with a new row every 7 members
 */
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { InstagramEmbed } from 'react-social-media-embed';
import { Card, CardContent } from '@mui/material';

function BigOfficerBoard() {

    const historian = "https://www.instagram.com/p/CxjYjCAMXL1/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const d7 = "https://www.instagram.com/p/CxjY9basymJ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const culture = "https://www.instagram.com/p/CxjayXSMa6A/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const events = "https://www.instagram.com/p/CxjcPfNsZxl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const fundraising = "https://www.instagram.com/p/CxjddvPs3_O/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const hospitality = "https://www.instagram.com/p/Cxjfu9dM0Dl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const promo = "https://www.instagram.com/p/CxlF5XwsrIP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const service = "https://www.instagram.com/p/CxlGTw4MNI1/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
    const sports = "https://www.instagram.com/p/CxlG6raMFQL/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";

    return (
        <Grid container xs = {12} mt ={5} ml = {1}spacing = {2} direction={'row'}>
            <Grid item xs = {1}/>
            <Grid item xs = {3}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {historian}                   
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
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {d7}                
                    style={{
                        maxWidth: 550,           
                    }}
                        width="100%"
                        align = 'center' />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {3}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {culture}                   
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

            {/*New Row*/}
            <Grid item xs = {1}/>
            <Grid item xs = {3}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {events}                   
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
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {fundraising}                   
                    style={{
                        maxWidth: 550,           
                    }}
                        width="100%"
                        align = 'center' />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {3}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {hospitality}                   
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

            {/*New Row*/}
            <Grid item xs = {1}/>
            <Grid item xs = {3}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {promo}                   
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
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {service}                   
                    style={{
                        maxWidth: 550,           
                    }}
                        width="100%"
                        align = 'center' />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {3}>
                <Card sx = {{borderRadius: '30px'}}>
                    <CardContent style = {{overflow: 'auto', height:500}}>
                    <div 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url= {sports}                   
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
            
            
            
        
                
            
            <Grid item xs = {1}/>
            
        </Grid>
        


    );
}

export default BigOfficerBoard;