/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Is the grid component beneath "Constitution"
 * 
 *  Contains the text from the "Constitution" file
 * 
 */

import { Typography} from "@mui/material";

import React, { useEffect, useState } from 'react';

const scrollableTextStyle = {
  overflow: 'auto',
  maxHeight: 400,
};

function Constitution (){
  const [constitutionFile, setConstitutionFile] = useState('');
  
  

  useEffect(() => {
    fetch('/textfiles/Constitution.txt') 
      .then(response => response.text())
      .then(content => setConstitutionFile(content))
      .catch(error => console.log(error));
  }, []);

    return (
      <div style={scrollableTextStyle}>
        <Typography 
      mt = {2}
      style={{ whiteSpace: 'pre-wrap' }}>
        {constitutionFile}
    </Typography>
      </div>
    
    );
}

export default Constitution;