/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * is the DOM
 */
import MainHeader from './components/MainHeader';
import CssBaseline from '@mui/material/CssBaseline';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { themeOptions } from './ThemeOptions.tsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './Main.js';
import BoardMembers from './components/pages/boardPage/BoardMembers.js';


function App() {
  const fasaName = "FASA AT VT";


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
          <Route path ="board" element = {<BoardMembers theme = {theme}/>} />

        </Routes>
      </main>
    </BrowserRouter>
    </ThemeProvider>
    

      
  );
}

export default App;

