/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Calls the ExecutiveHighlight class and passes down an image
 *  along with the answers to the QnA that was given
 *
 */
import President from '../../../pictures/ExecutiveBoard/President.png';
import VicePresident from '../../../pictures/ExecutiveBoard/InternalVP.png';
import ExternalPres from '../../../pictures/ExecutiveBoard/ExternalVP.png';
import Treasurer from '../../../pictures/ExecutiveBoard/Treasurer.png';
import Secretary from '../../../pictures/ExecutiveBoard/Secretary.png';

import PresText from '../../../pictures/ExecutiveBoard/PresText.jpg';
import InternalText from '../../../pictures/ExecutiveBoard/InternalText.jpg';
import ExternalText from '../../../pictures/ExecutiveBoard/ExternalText.jpg';
import SecretaryText from '../../../pictures/ExecutiveBoard/SecretaryText.jpg';
import TreasurerText from '../../../pictures/ExecutiveBoard/TreasurerText.jpg';




import { Button, ButtonGroup, Card, Typography } from '@mui/material';
import ExecutiveMemberHighlight from './ExecutiveMemberHighlight';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const CutomPositionCard = styled(Card)(({ theme}) => ({
  background: '#7F5F49',
  borderRadius: '20px',
}));

function ExecutiveBoard() {

  //activeVariant is the variable to get callled
  //and it changes do to setActiveVariant
  const [activeVariant, setActiveVariant] = useState('variant1');

  const handleButtonClick = (variant) => {
    setActiveVariant(variant);
  };

  const renderElement = () => {
    switch (activeVariant) {
      case 'president':
        return (
          //Each one is a new variant with different variables
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "president"
            image = {President}
            imageText = {PresText}
            />
          </CutomPositionCard>
        );
      case 'internalvicepres':
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "ivp"
            image = {VicePresident}
            imageText = {InternalText}/>
          </CutomPositionCard>
        );
      case 'externalvicepres':
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "evp"
            image = {ExternalPres}
            imageText = {ExternalText}/>
          </CutomPositionCard>
        );
        case 'secretary':
          return(
            <CutomPositionCard elevation={5}>
              <ExecutiveMemberHighlight key = "secretary"
              image = {Secretary}
              imageText = {SecretaryText}
              />
            </CutomPositionCard>
          );
        case 'treasurer' :
          return(
            <CutomPositionCard elevation={5}>
              <ExecutiveMemberHighlight key = "treasurer"
              image = {Treasurer}
              imageText = {TreasurerText}
              />
            </CutomPositionCard>
          );
      default:
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "president"
            image = {President}
            imageText = {PresText}/>
          </CutomPositionCard>
        );
    }
  };
  
  return (<div>
    <Grid item>
      <ButtonGroup variant = 'text' elevation = {8}>
        <Button
          onClick={() => handleButtonClick('president')}
          >
            <Typography variant='body2'>
            President
            </Typography>
        </Button>
        <Button 
          onClick={() => handleButtonClick('internalvicepres')}
           >
          <Typography variant='body2'>

          Internal Vice President
          </Typography>
        </Button>
        <Button 
          onClick={() => handleButtonClick('externalvicepres')}
           >
            <Typography variant='body2'>
            External Vice President


            </Typography>
        </Button>
        <Button 
          onClick={() => handleButtonClick('secretary')}
           >
          <Typography variant='body2'>

          Secretary
          </Typography>
        </Button>
        <Button 
          onClick={() => handleButtonClick('treasurer')}
           >
          <Typography variant='body2'>

          Treasurer
          </Typography>
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