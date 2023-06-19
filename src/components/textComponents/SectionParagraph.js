import TextareaAutosize from 'react-textarea-autosize';

const SectionParagraph = (props) => {
  

  return (
    <div>
      <TextareaAutosize
        value={props.subText}
        readOnly
        minRows={3} // Set the minimum number of rows
        maxRows={50} // Set the maximum number of rows
        className="custom-textarea" // Apply a CSS class for styling
        style={{ width: '50%' }} // Apply inline styles for width
      />
    </div>
  );
};

export default SectionParagraph;