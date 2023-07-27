import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { styled } from '@mui/system';

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    background: '#FFC000', // Change the background color to lightblue or any other color you prefer
    // Add any other styles you want to customize the Accordion component
    }));

const Article = (props) => {


    const [file, setFile] = useState('');

    useEffect(() => {
    fetch(props.path) 
      .then(response => response.text())
      .then(content => setFile(content))
      .catch(error => console.log(error));
    }, [props.path]);

    return (
        <Grid container>
                    <Grid item xs/>
                    <Grid item xs = {8}>
                        <CustomAccordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                                <Typography variant="h4" >
                                    {props.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx = {{whiteSpace: 'pre-wrap'}}>
                                    {file}
                                </Typography>
                            </AccordionDetails>
                        </CustomAccordion>
                    </Grid>
                    <Grid item xs/>

                </Grid>



    );

}

export default Article;