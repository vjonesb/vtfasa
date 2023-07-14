/**
 *  author: Patrick Vyn Badiang
 * 
 * Description:
 * is the footer of the page, contains the socials
 * 
 */


import { Typography, Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function BottomFooter() {

    const faceBook = 'https://www.facebook.com/fasavirginiatech';
    const youTube = 'https://www.youtube.com/VTFASAHokies';
    const instagram = 'https://www.instagram.com/vt_fasa/';

    return (
        <Grid container xs = {12}>
            
            
            <Grid item xs>
                <div align = 'center'>
                <ButtonGroup variant = 'contained' color = 'secondary'>
                    <Button href= {faceBook}  target="_blank" rel="noopener" >
                        <Typography variant = 'body1' color = "white">
                            FaceBook
                        </Typography>
                    </Button>
                    <Button href= {instagram} target="_blank" rel="noopener" >
                        <Typography variant = 'body1' color = "white">
                            Instagram
                        </Typography>
                    </Button>
                    <Button href= {youTube}  target="_blank" rel="noopener" >
                        <Typography variant = 'body1' color = "white">
                            Youtube
                        </Typography>
                    </Button>
                </ButtonGroup>
                </div>
                
                
            </Grid>
            

        </Grid>
        
    );
}

export default BottomFooter;