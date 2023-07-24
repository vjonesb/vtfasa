/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Call the CardWithDropDown component whenever we want
 *  to add a new member.
 * 
 *  Passes down the image as well as a title and description
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
  background: '#EED589',
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
      <ButtonGroup variant='text'>
        <Button 
          onClick={() => handleButtonClick('president')}>
          President
        </Button>
        <Button 
          onClick={() => handleButtonClick('internalvicepres')}>
          Internal Vice President
        </Button>
        <Button 
          onClick={() => handleButtonClick('externalvicepres')}>
          External Vice President
        </Button>
        <Button 
          onClick={() => handleButtonClick('secretary')}>
          Secretary
        </Button>
        <Button 
          onClick={() => handleButtonClick('treasurer')}>
          Treasurer
        </Button>
      </ButtonGroup>
      <div>
        {/* Element to be showcased */}
        {renderElement()}
      </div>
    </Grid>

    </div>
  );
}

export default ExecutiveBoard;