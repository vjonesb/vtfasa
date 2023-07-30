import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


const NewStep = (props) => {


    return (
        <Grid container xs = {12}>
                        <Grid item xs = {1}/>
                        <Grid item xs = {10}>
                                <Card>
                                    <CardMedia 
                                    component="img"
                                    sx={{objectFit: 'cover'}}
                                    image= {props.img}
                                    title="Step 1"
                                    
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {props.title}
                                        </Typography>
                                        <Typography variant="body1">
                                           {props.body}
                                        </Typography>
                                    </CardContent>
                                </Card>
                        <Grid item xs = {1}/>

                        </Grid>
                    </Grid>

    );

}

export default NewStep;