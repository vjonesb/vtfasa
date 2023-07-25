/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  is the paragraph about FASA
 */

import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from 'react';


function SummaryOfFasa() {

    const [summaryFile, setSummaryFile] = useState('');
  
  

  useEffect(() => {
    fetch('/textfiles/Summary.txt') 
      .then(response => response.text())
      .then(content => setSummaryFile(content))
      .catch(error => console.log(error));
  }, []);

    return (
            <Box >
                <Typography
                    variant = 'h2'
                    align = 'center'>
                    What is FASA?
                </Typography>
                <Typography
                    align = 'center'
                    sx = {{marginBottom: '20px'}}>
                    {summaryFile}
                </Typography>
            </Box>
            
           
     
    )

}

export default SummaryOfFasa;