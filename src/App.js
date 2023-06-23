/**
	author: Patrick Badiang
	Date: 6/15/23

	description:
    Is the main App
*/
import './App.css';
import MainHeader from './components/textComponents/MainHeader';
import MainPage from './components/textComponents/MainPage';

/**
  is the host of all the components and is the one that runs first
  to instiate the other components.
 */
function App() {
  const fasaName = "Filipino American Student Association";


  
  
  /*
    Show cases the website in the order of the components being rendered
  */
  return (
    <div className = "App">
      
      <MainHeader text = {fasaName}/* Calls the title Component *//>
      <MainPage/>
      

    </div>
  );
}

export default App;

