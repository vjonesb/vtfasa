/**
	author: Patrick Badiang
	Date: 6/15/23

	description:
    Is the component of the photo
*/

const Photo = (props) => {
    /*
        creates a div for any photo through "props.photo"
    */

    return (

            <div style={{ position: 'relative', width: '50%', height: '50vh' }}>
                <img src={props.photo} alt ="Fasa Img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transformOrigin: 'top left' }}/>
            
            
    </div>
    );
}

export default Photo;