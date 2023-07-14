/*
    author: Patrick Vyn Badiang

    description:
    Is the mean header of the page, does not change
*/
import FasaImg from '../pictures/FasaLogo.png';
import { Typography, Box, AppBar, Toolbar, Button, ButtonGroup, Avatar } from "@mui/material";

const MainHeader = (props) => {
    

    return (
        <Box>
            <AppBar sx = {{
                marginTop: '5px',
                marginBottom: '5px',
                height: '100px'
            }}>
                <Toolbar sx = {{
                    marginTop: '10px'
                }}>
                    <Avatar 
                        src = {FasaImg}
                        sx = {{
                            width: '75px',
                            height: '75px',
                            marginRight: '10px'
                        }}/>
                    <Typography 
                        variant="h3"
                        fontWeight={'bold'}
                        sx = {{
                            flexGrow: 1,
                            textDecoration: 'underline'
                        }}>{props.text}
                    </Typography>
                    <ButtonGroup 
                        variant = 'contained' disableElevation
                        aria-label="outlined primary button group">
                        <Button href = "/"
                            sx={{ my: 2, color: 'white', display: 'block' }}>

                            <Typography variant = "h6" fontWeight={'bold'} sx = {{textDecoration: 'underline'}}>
                            Home
                            </Typography>        
                                                
                        </Button>
                        <Button href = "/board"
                            sx={{ my: 2, color: 'white', display: 'block' }}>

                            <Typography variant = "h6" fontWeight={'bold'} sx = {{textDecoration: 'underline'}}>
                            Board
                            </Typography>        

                        </Button>
                        
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>

    );

}

export default MainHeader;