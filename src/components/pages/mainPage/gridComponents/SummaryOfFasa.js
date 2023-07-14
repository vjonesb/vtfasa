/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  is the paragraph about FASA
 */

import { Box, Typography, Button } from "@mui/material";

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
                    align = 'center'
                    sx = {{textDecoration: 'underline'}}>
                    What is FASA?
                </Typography>
                <Typography
                    align = 'center'
                    sx = {{marginBottom: '20px'}}>
                    {summaryFile}
                </Typography>
                <Button 
                variant = "contained"
                color = "secondary"
                target="_blank" rel="noopener"
                href = "https://docs.google.com/document/u/1/d/e/2PACX-1vRlptt5EA2a8VUQTHJP5VV6ZYvN9xUgCV1s6WfuZDLVtEoAGSL9A4DLfMLOay2ibhXnZ0KOE3YdonGO/pub"
                >
                    Constitution
                </Button>
            </Box>
            
           
     
    )

}

export default SummaryOfFasa;