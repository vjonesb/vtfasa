/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  Is the grid component beneath "ScholarShip"
 * 
 *  Contains the text from the ScholarShip text file
 *  As well as a hyperlink to the scholarship
 */


import React, { useEffect, useState } from 'react';
import { Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import LinkedSection from '../LinkedSection';

const scrollableTextStyle = {
    overflow: 'auto',
    maxHeight: 400,
    marginTop: '30px'
  };


function Scholarship() {

    const linkTo = "https://vt.academicworks.com/opportunities/10121?fbclid=IwAR3wpNb2teIO0ZdqL9Hx1laQ0cntN1Kekj3n9BwXkDP7PJJbMMT1CuZxyJA";

    const [scholarShipFile, setScholarShipFile] = useState('');

    

    useEffect(() => {
        fetch('/textfiles/ScholarShip.txt') 
      .then(response => response.text())
      .then(content => setScholarShipFile(content))
      .catch(error => console.log(error));
    } , []);


    return (
        <Grid container xs = {12} marginTop = {4}>
            <Grid xs = {12}>
                <div maxWidth={400}>
                    <LinkedSection
                        link = {linkTo}
                        target="_blank" rel="noopener"
                        text = "Scholarship" 
                        colorBox1 = "#852d1a" 
                        colorBox2 = "#f8c043"/>
                </div>
                
                <div style={scrollableTextStyle}>
                <Typography
                variant = 'body1'
                mt = {2}
                mb = {2}
                style={{ whiteSpace: 'pre-wrap' }}>
                    {scholarShipFile}
                </Typography>
                </div>
            
                <div align = 'center'>
                    
                    <Button 
                        href = {linkTo}
                        variant = "contained"
                        color = 'secondary'
                        size = "large"
                        target="_blank" rel="noopener"
                        endIcon = {<SendIcon/>}
                    >Scholarship</Button>
                    
                </div>
            </Grid>
        </Grid>
            

    );
}

export default Scholarship;