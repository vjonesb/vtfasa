/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Calls the ExecutiveHighlight class and passes down an image
 *  along with the answers to the QnA that was given
 */
import President from '../../../pictures/ExecutiveBoard/President.png';
import VicePresident from '../../../pictures/ExecutiveBoard/VicePres.png';
import ExternalPres from '../../../pictures/ExecutiveBoard/ExternalPres.png';
import Treasurer from '../../../pictures/ExecutiveBoard/Treasurer.png';
import Secretary from '../../../pictures/ExecutiveBoard/Secretary.png';




import { Button, ButtonGroup, Card } from '@mui/material';
import ExecutiveMemberHighlight from './ExecutiveMemberHighlight';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const CutomPositionCard = styled(Card)(({ theme}) => ({
  background: '#FBF3DB',
  borderRadius: '20px',
}));

function ExecutiveBoard() {

  const [activeVariant, setActiveVariant] = useState('variant1');

  const handleButtonClick = (variant) => {
    setActiveVariant(variant);
  };

  const renderElement = () => {
    switch (activeVariant) {
      case 'president':
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "president"
            image = {President}
            position = "President"
            name = "Pamela Untalan" 
            major = "Buisness International Technology"
            minor = "NA"/>
          </CutomPositionCard>
        );
      case 'internalvicepres':
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "ivp"
            image = {VicePresident}
            position = "Internal Vice President"
            name = "Delfin Lagman" 
            major = "Buisness International Technology"
            minor = "NA"/>
          </CutomPositionCard>
        );
      case 'externalvicepres':
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "evp"
            image = {ExternalPres}
            position = "External Vice President"
            name = "Alexa Marticio" 
            major = "Buisness International Technology"
            minor = "NA"/>
          </CutomPositionCard>
        );
        case 'secretary':
          return(
            <CutomPositionCard elevation={5}>
              <ExecutiveMemberHighlight key = "secretary"
              image = {Secretary}
              position = "Secretary"
              name = "Eric Domingo" 
              major = "Buisness International Technology"
              minor = "NA"/>
            </CutomPositionCard>
          );
        case 'treasurer' :
          return(
            <CutomPositionCard elevation={5}>
              <ExecutiveMemberHighlight key = "treasurer"
              image = {Treasurer}
              position = "Treasurer"
              name = "Megan Sambile" 
              major = "Buisness International Technology"
              minor = "NA"/>
            </CutomPositionCard>
          );
      default:
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "president"
            image = {President}
            position = "President"
            name = "Pamela Untalan" 
            major = "Buisness International Technology"
            minor = "NA"/>
          </CutomPositionCard>
        );
    }
  };
  
  return (<div>
    <Grid item>
      <ButtonGroup variant='text' elevation = {8}>
        <Button 
          onClick={() => handleButtonClick('president')}
          sx = {{
            fontSize: {
              xs: '0.7rem',   // Extra-small devices (phones)
              sm: '0.7rem', // Small devices (tablets)
              md: '1rem',   // Medium devices (desktops)
              lg: '1.8rem',   // Large devices (large desktops)
            },
          }}>
          President
        </Button>
        <Button 
          onClick={() => handleButtonClick('internalvicepres')}
          sx = {{
            fontSize: {
              xs: '0.7rem',   // Extra-small devices (phones)
              sm: '0.7rem', // Small devices (tablets)
              md: '1rem',   // Medium devices (desktops)
              lg: '1.8rem',   // Large devices (large desktops)
            },
          }}>
          Internal Vice President
        </Button>
        <Button 
          onClick={() => handleButtonClick('externalvicepres')}
          sx = {{
            fontSize: {
              xs: '0.7rem',   // Extra-small devices (phones)
              sm: '0.7rem', // Small devices (tablets)
              md: '1rem',   // Medium devices (desktops)
              lg: '1.8rem',   // Large devices (large desktops)
            },
          }}>
          External Vice President
        </Button>
        <Button 
          onClick={() => handleButtonClick('secretary')}
          sx = {{
            fontSize: {
              xs: '0.7rem',   // Extra-small devices (phones)
              sm: '0.7rem', // Small devices (tablets)
              md: '1rem',   // Medium devices (desktops)
              lg: '1.8rem',   // Large devices (large desktops)
            },
          }}>
          Secretary
        </Button>
        <Button 
          onClick={() => handleButtonClick('treasurer')}
          sx = {{
            fontSize: {
              xs: '0.7rem',   // Extra-small devices (phones)
              sm: '0.7rem', // Small devices (tablets)
              md: '1rem',   // Medium devices (desktops)
              lg: '1.8rem',   // Large devices (large desktops)
            },
          }}>
          Treasurer
        </Button>
      </ButtonGroup>
      <div style={{marginTop: '10px'}}>
        {/* Element to be showcased */}
        {renderElement()}
      </div>
    </Grid>

    </div>
  );
}

export default ExecutiveBoard;