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

//Photos
import OBoard from '../../pictures/O-Board_Pic.png';
import EBoard from '../../pictures/E-Board_Pic.png';



const MainPage = (props) => {
    //Section Titles
  const constitution = "Constitution";
  const events = "Events";
  const boardMembers = "Board Members";
  const scholarShip = "Scholarship";

  //Section Paragraphs

  //Constitution Text
  const [constitutionFile, setConstitutionFile] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/textfiles/Constitution.txt');
        const text = await response.text();
        setConstitutionFile(text);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchData();
  }, []);

    //ScholarShip Text
    const [scholarShipFile, setScholarShipFile] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/textfiles/ScholarShip.txt');
        const text = await response.text();
        setScholarShipFile(text);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchData();
  }, []);

    return <div>
        <CoverPhoto /*Calls the CoverPhoto Component*//> 

        <Section text = {events} subText = "TBD"/>
        <Section class = "Picture" text = {boardMembers} photo = {OBoard} photo2 = {EBoard}/>
        <Section text = {scholarShip} subText = {scholarShipFile}/>
        <Section text = {constitution} subText = {constitutionFile} maxLength = {100}/>
    </div>
}

export default MainPage;