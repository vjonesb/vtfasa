/*
    author: Patrick Vyn Badiang

    description:
    Is the mean header of the page, does not change
*/

const MainHeader = (props) => {

    return <div>
        <header> 
        <h1 >{props.text}</h1> 
        </header>
    </div>

}

export default MainHeader;