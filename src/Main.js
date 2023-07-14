
import { ThemeProvider } from '@mui/material/styles';


import MainHeader from './components/MainHeader';
import MainPage from './components/pages/mainPage/MainPage';
import CssBaseline from '@mui/material/CssBaseline';

const Main = (props) => {
    const fasaName = "FASA AT VT";


    return (
        <ThemeProvider theme={props.theme}>

        <CssBaseline />
        <MainHeader text = {fasaName}/>
        <MainPage/>
        </ThemeProvider>
    )
}

export default Main;