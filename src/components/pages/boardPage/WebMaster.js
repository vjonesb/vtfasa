import styled from "@emotion/styled";
import { Card, CardContent, CardMedia } from "@mui/material";
import backgroundImage from './BackgroundPic.png';

import FundRaisingChair1 from '../../../pictures/OfficerBoard/FundraisingChair1.png';


const BackgroundImageCard = styled(Card)(({theme}) => ({
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
                <BackgroundImageCard>
                    <CardContent>
                        <CardMedia 
                        component="img"
                        src={FundRaisingChair1}
                        alt="Image"
                        style={{
                            objectFit: 'contain',
                            }}
                        />    
                                   
                        
                    </CardContent>
                </BackgroundImageCard>
        </div>
    );
}

export default WebMaster;