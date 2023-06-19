/**
	author: Patrick Badiang
	Date: 6/15/23

	description:
    Is the main App
*/
import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/textComponents/Title';
import CoverPhoto from './components/photoComponents/CoverPhoto';
import Section from './components/textComponents/Section';

/**
  is the host of all the components and is the one that runs first
  to instiate the other components.
 */
function App() {

  //Section Titles
  const fasaName = "Filipino American Student Association";
  const constitution = "Constitution";
  const events = "Events";
  const boardMembers = "Board Members";
  const scholarShip = "Scholarship";

  //Section Paragraphs
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/textfiles/Constitution.txt');
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchData();
  }, []);
  
  /*
    Show cases the website in the order of the components being rendered
  */
  return (
    <div>
    
      <Title text = {fasaName}/* Calls the title Component *//>
      <CoverPhoto /*Calls the CoverPhoto Component*//> 
      <Section text = {events} subText = "Test"/>
      <Section text = {boardMembers} subText = "Test"/>
      <Section text = {scholarShip} subText = "Test"/>
      <Section text = {constitution} subText = {fileContent} maxLength = {100}/>

    </div>
  );
}

export default App;

