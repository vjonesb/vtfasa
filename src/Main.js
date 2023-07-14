/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * is called by "App.js"
 */


import { ThemeProvider } from '@mui/material/styles';


import MainPage from './components/pages/mainPage/MainPage';
import CssBaseline from '@mui/material/CssBaseline';

const Main = (props) => {


    return (
        <ThemeProvider theme={props.theme}>

        <CssBaseline />
        <MainPage/>
        </ThemeProvider>
    )
}

export default Main;