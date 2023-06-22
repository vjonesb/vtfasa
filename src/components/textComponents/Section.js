/**
 * author: Patrick Vyn Badiang
 * 
 * Description:
 * 
 * Is used for any section
 * Depending on whether or not specific props exist, 
 * itll then display accordingly
 * 
 * Ex: If it has props.subText then it'll create a text area
 * But if there is no props.subText and it has a props.photo 
 * then it'll create a photo component
 */
import SectionParagraph from './SectionParagraph';
import Photo from '../photoComponents/Photo';

const Section = (props) => {

    

    return <div>
        <h1>{props.text}</h1>
        <main>
            {props.subText && <SectionParagraph subText = {props.subText}/>}
            {props.photo2 && <Photo photo = {props.photo}/> && <Photo photo = {props.photo2}/>}
            {!props.subText && props.photo && <Photo photo = {props.photo}/>}
            
        </main>
        
    </div>
}

export default Section;