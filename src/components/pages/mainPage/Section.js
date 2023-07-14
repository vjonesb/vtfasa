/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * 
 * Is used for any section
 * Depending on whether or not specific props exist, 
 * itll then display accordingly
 * 
 * Ex: If it has props.subText then it'll create a text area
 * But if there is no props.subText and it has a props.photo 
 * then it'll create a photo component
 */
import { Typography, Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';




const Section = (props) =>{


    return (
        <Grid container xs = {12} >
            <Grid xs = {2}/>
            <Grid xs = {8}>
                    <div align = 'center'>
                        <Box position = "relative" height = {60} maxWidth={400}>
                            <Box
                                position="absolute"
                                width="100%"
                                height= "100%"
                                bgcolor= {props.colorBox1}
                                zIndex={1}
                                top={10}  // Move the first box down by 30px
                                left={10} // Move the first box to the left by 20pxlements
                            />
                            <Box
                                position="absolute" // Use absolute position for overlapping
                                width = "100%"
                                bgcolor= {props.colorBox2}
                                zIndex={2} // Higher zIndex will stack the box above lower zIndex elements
                            >
                            <Typography variant = 'h3' 
                                align='center' 
                                color={'whitesmoke'}
                                >{props.text}</Typography>
                            </Box>
                        </Box>
                    </div>
                    
                    
            </Grid>
            <Grid xs = {2}/>
        </Grid>
    )
}

export default Section;