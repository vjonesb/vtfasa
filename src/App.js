/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * is the DOM
 */
import MainHeader from './components/MainHeader';
import CssBaseline from '@mui/material/CssBaseline';


import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { themeOptions } from './ThemeOptions.tsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './Main.js';
import BoardPage from './components/pages/boardPage/BoardPage';
import ConstitutionPage from './components/pages/constitutionPage/ConstitutionPage';
import ResourcesPage from './components/pages/resourcesPage/ResourcesPage';
import DonationPage from './components/pages/donationPage/DonationPage';
import PicturesPage from './components/pages/picturesPage/PicturesPage';
import FormPage from './components/pages/formPage/FormPage';


function App() {
  const fasaName = "FASA at VT";
  const theme = createTheme(themeOptions);  

  return (
    
    <ThemeProvider theme={theme}>

        <CssBaseline />
        
        <BrowserRouter>
        <div>
          <MainHeader text = {fasaName}/>
        </div>
      <main>
        <Routes>
        
          <Route path ="/" element = {<Main theme = {theme}/>} />
          <Route path ="board" element = {<BoardPage theme = {theme}/>} />
          <Route path = "constitution" element = {<ConstitutionPage theme = {theme}/>}/>
          <Route path = "resources" element = {<ResourcesPage theme = {theme}/>}/>
          <Route path = "donation" element = {<DonationPage theme = {theme}/>}/>
          <Route path = "fasapictures" element = {<PicturesPage theme = {theme}/>}/>
          <Route path = "forms" element = {<FormPage theme = {theme}/>}/>

        </Routes>
      </main>
    </BrowserRouter>
    </ThemeProvider>
    

      
  );
}

export default App;

