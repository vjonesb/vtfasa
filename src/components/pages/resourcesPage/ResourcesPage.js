import { Typography, Paper, Box, ImageListItem, ImageListItemBar } from "@mui/material";

import BottomFooter from "../mainPage/gridComponents/BottomFooter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Divider from "../../Divider";
import Masonry from '@mui/lab/Masonry';


function ResourcesPage() {

    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            marginTop: '0px',
          },
          image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            marginTop: '100px'
          },
    };
    const imageData = [
        {
          id: 1,
          img: '/pictures/resources/logo-share-SanMatero.png',
          title: 'SanMatero',
        },
        
        {
          id: 3,
          img: '/pictures/resources/frontiersLogo.webp',
          title: 'Mental Health',
        },
        {
            id: 4,
            img: '/pictures/resources/NamiLogo.png',
            title: 'Identity Problems',
        },
        {
            id: 2,
            img: '/pictures/resources/OrangeAAPALogo.png',
            title: 'Asian American Psychology Association',
        },
        {
            id: 5,
            img: '/pictures/resources/GreenAAPALogo.png',
            title: 'Trauma Violence',
        },
        {
            id: 6,
            img: "/pictures/resources/YellowAAPALogo.png",
            title: "Substance Abuse",
        },
        {
            id: 7,
            img: '/pictures/resources/GreenAAPALogo.png',
            title: 'Intimate Partner Violence',
        },
        {
            id: 8,
            img: '/pictures/resources/HumanRightsLogo.png',
            title: 'Coming Out',
        },
        
      ];

    return(
        <div>
            <div style={styles.container} >
                <img
                  src='/pictures/fasa_pic.png' // Replace with the actual path to your image
                  alt = 'cover'
                  style={styles.image}/>
              </div>
              <Typography variant="h1" align="center">
                Health
              </Typography>
              <Divider color = "black"/>

              <Grid container xs = {12}>
                <Grid item xs/>
                <Grid item xs = {10}>
                    <Masonry columns={3} spacing={4}
                    
                    >
                        {imageData.map((item) => (
                            <ImageListItem key={item.id}>
                            <img 
                                style= {{objectFit: 'fit'}}
                                src={item.img} 
                                alt={item.title}
                                />
                            <ImageListItemBar
                            position = "below"
                            title = {item.title}/>
                            </ImageListItem>
                            
                        ))}
                    </Masonry>
                </Grid>
                <Grid item xs/>
              </Grid>
                

              <Paper sqaure sx = {{width: 'full'}}>
                <Box sx = {{height: '20px'}} mt = {10}/>
                    <Divider color = 'green'/>
                    <BottomFooter/>
                <Box sx = {{height: '30px'}}/>
            </Paper>

        </div>
    );
}

export default ResourcesPage;