import SectionParagraph from './SectionParagraph';

const Section = (props) => {
    const text = props.text;

    return <div>
        <h1>{props.text}</h1>
        <SectionParagraph subText = {props.subText}/>
    </div>
}

export default Section;