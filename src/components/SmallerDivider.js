/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * simply is the divider whenever one is needed
 */
import { Box} from "@mui/material";

const Divider = (props) => {
  

    return (
        <Box  bgcolor = {props.color} sx={{
        marginTop: '10px',
        marginBottom: '20px',
        width: 'full',
        height: 5,
        marginRight: '200px',
        marginLeft: '200px',
        
      }}/>
    )

}

export default Divider;