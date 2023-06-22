/**
 *  author: Patrick Vyn Badiang
 * 
 *  Description:
 *  is the main page, contains everything 
 *  we want to be shown on the first page
 */

import Section from './Section';
import React, { useEffect, useState } from 'react';
import CoverPhoto from '../photoComponents/CoverPhoto';



const MainPage = (props) => {
    //Section Titles
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

    return <div>
        <CoverPhoto /*Calls the CoverPhoto Component*//> 

        <Section text = {events} subText = "Test"/>
        <Section text = {boardMembers} subText = "Test"/>
        <Section text = {scholarShip} subText = "Test"/>
        <Section text = {constitution} subText = {fileContent} maxLength = {100}/>
    </div>
}

export default MainPage;