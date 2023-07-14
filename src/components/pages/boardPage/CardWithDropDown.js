/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 * 
 *  Showcases both Eboard and OBoard
 * 
 *  When they hover over the card then it drops down 
 *  with the title and description
 */

import { Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

import { useState } from 'react';

import { styled } from '@mui/system';

const AnimatedContentWrapper = styled('div')`
  position: relative;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateY(${(props) => (props.isHovered ? '0' : '-100%')});
  opacity: ${(props) => (props.isHovered ? '1' : '0')};
`;


const CardWithDropDown = (props) => {
  const pic = props.picture;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (<div>
    <Box sx = {{height: '150px'}}/>
    <Card
      elevation={0}
      sx={{ maxWidth: 345,
        margin: 'unset',
        backgroundColor: 'transparent', // Remove default background
        }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        sx={{ height: 300 }}
        image = {pic}
      >
      </CardMedia>
      
        <AnimatedContentWrapper isHovered={isHovered}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </AnimatedContentWrapper>
      
      
      
    </Card>
    </div>
  );
}

export default CardWithDropDown;