/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Calls the ExecutiveHighlight class and passes down an image
 *  along with the answers to the QnA that was given
 *
 */
import President from '../../../pictures/ExecutiveBoard/President.png';
import VicePresident from '../../../pictures/ExecutiveBoard/VicePres.png';
import ExternalPres from '../../../pictures/ExecutiveBoard/ExternalPres.png';
import Treasurer from '../../../pictures/ExecutiveBoard/Treasurer.png';
import Secretary from '../../../pictures/ExecutiveBoard/Secretary.png';




import { Button, ButtonGroup, Card, Typography } from '@mui/material';
import ExecutiveMemberHighlight from './ExecutiveMemberHighlight';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const CutomPositionCard = styled(Card)(({ theme}) => ({
  background: '#FBF3DB',
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
            position = "President"
            name = "Pamela Untalan" 
            major = "Mathematics"
            minor = "Computer Science, Music, Asian American Studies"
            memory = "Retreat from last year!"
            listening = "Better Apart By Emotional Oranges"
            hobbies = "Singing and Reading"
            mL = "_be rich and famous_"/>
          </CutomPositionCard>
        );
      case 'internalvicepres':
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "ivp"
            image = {VicePresident}
            position = "Internal Vice President"
            name = "Delfin Lagman" 
            major = "Buisness Information Technology"
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
            major = "Buisness Information Technology"
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
              major = "Buisness Information Technology"
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
              major = "Accounting and Information Systems"
              minor = "NA"
              memory = "Winning Miss FASA😏😏😏😏😏😏"
              listening = "Better Apart By Emotional Oranges"
              hobbies = " Dance, interior design, painting, riding on my motorcycle"
              mL = "_corporate baddie 💅🏼💅🏼💅🏼💅🏼💅🏼_"/>
            </CutomPositionCard>
          );
      default:
        return (
          <CutomPositionCard elevation={5}>
            <ExecutiveMemberHighlight key = "president"
            image = {President}
            position = "President"
            name = "Pamela Untalan" 
            major = "Mathematics"
            minor = "Computer Science, Music, Asian American Studies"
            memory = "Retreat from last year!"
            listening = "Better Apart By Emotional Oranges"
            hobbies = "Singing and Reading"
            mL = "_be rich and famous_"/>
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