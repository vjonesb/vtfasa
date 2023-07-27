import { Typography, Paper, Box,Card, CardContent, CardMedia } from "@mui/material";

import BottomFooter from "../mainPage/gridComponents/BottomFooter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Divider from "../../Divider";
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/system';

const CustomMasonryCard = styled(Card)(({ theme }) => ({
    background: '#7393B3',
    
  }));

const CustomCard = styled(Card)(({ theme }) => ({
    background: '#FBF3DB',
}))



  

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
          description: 'Filipino Mental Health Initiative',
          link: 'https://www.smchealth.org/filipino-mental-health-initiative',
        },
        
        {
          id: 2,
          img: '/pictures/resources/frontiersLogo.webp',
          title: 'Mental Health',
          description: 'State of Mental Health in the Philippines',
          link: 'https://www.frontiersin.org/articles/10.3389/fpsyg.2021.706483/full',
        },
        {
            id: 3,
            img: '/pictures/resources/NamiLogo.png',
            title: 'Identity Problems',
            description: 'Asian American and Pacific Islander',
            link: 'https://www.nami.org/Your-Journey/Identity-and-Cultural-Dimensions/Asian-American-and-Pacific-Islander',
        },
        {
            id: 4,
            img: '/pictures/resources/OrangeAAPALogo.png',
            title: 'Asian American Psychology Association',
            description: 'Asian American Psychological Association',
            link: 'https://aapaonline.org/',
        },
        {
            id: 5,
            img: '/pictures/resources/GreenAAPALogo.png',
            title: 'Trauma Violence',
            description: 'Trauma and Violence Exposure among Asian American and Pacific Islander children',
            link: 'https://aapaonline.org/wp-content/uploads/2014/06/AAPA_Trauma-Violence-web1.pdf',

        },
        {
            id: 6,
            img: "/pictures/resources/YellowAAPALogo.png",
            title: "Substance Abuse",
            description: 'Substance Abuse & Asian American Pacific Islanders',
            link: 'https://aapaonline.org/wp-content/uploads/2014/06/AA-Substance-Use_final-web.pdf',

        },
        {
            id: 7,
            img: '/pictures/resources/GreenAAPALogo.png',
            title: 'Intimate Partner Violence',
            description: 'Intimate Partner Violence Among Asian American and Pacific Islander Women',
            link: 'https://aapaonline.org/wp-content/uploads/2014/06/AA_IPV-final-web.pdf',

        },
        {
            id: 8,
            img: '/pictures/resources/HumanRightsLogo.png',
            title: 'Coming Out',
            description: 'Living Authentically as LGBTQ Asian and Pacific Islander Americans',
            link: 'https://assets2.hrc.org/files/assets/resources/HRC-Coming_Out-API-FINAL-web-2018.pdf',
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
                <CustomMasonryCard sx={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <div style ={{marginLeft: 30, marginTop: 30}}>
                    <Masonry columns={3} spacing={4}>
                        {imageData.map((item) => (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <CustomCard elevation={6}>
                                <CardMedia sx = {{height: 140}}
                                image = {item.img}/>
                                <CardContent>
                                    <Typography variant="h6">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CustomCard>  
                            </a>
                        ))}
                    </Masonry>
                    </div>
                    </CustomMasonryCard>
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