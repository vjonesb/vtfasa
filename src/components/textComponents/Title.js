/**
	author: Patrick Badiang
	Date: 6/15/23

	description:
    Is the title section of any text
*/

/*
    takes in the "text" var that is passed in
 */
const Title = (props) => {
    return <div>
            <h1 >{props.text}</h1>
        </div>
}

export default Title;