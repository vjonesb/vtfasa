/**
	author: Patrick Badiang
	Date: 6/15/23

	description:
    Is the component of the cover photo
*/

import logo from '../../fasa_pic.png';


function CoverPhoto() {
    /*
        src = {logo} lets us use the var logo
        which was difined from the import line and takes on the
        png named "fasa_pic" 

        style = {{width: '75%'}} reduces the original size
        the reduction is by 25% in this case.

    */

    return (
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <img src={logo} alt ="Fasa Cover Img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transformOrigin: 'top left' }}/>
            
    </div>
    );
}

export default CoverPhoto;