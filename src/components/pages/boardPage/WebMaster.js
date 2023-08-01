import styled from "@emotion/styled";
import { Card, CardContent, Paper, Typography } from "@mui/material";
import backgroundImage from './BackgroundPic.png';


const BackgroundImagePaper = styled(Paper)(({theme}) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  
  padding: theme.spacing(2),
  // Add other styles as needed for the Paper component
}))

function WebMaster() {
    return(
        <div>
            <BackgroundImagePaper elevation={3}>
                <Card>
                    <CardContent>
                        <Typography>
                            This is card
                        </Typography>
                    </CardContent>
                </Card>
                
            </BackgroundImagePaper>
        </div>
    );
}

export default WebMaster;