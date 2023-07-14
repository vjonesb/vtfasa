import { Box} from "@mui/material";

const Divider = (props) => {
  

    return (
        <Box  bgcolor = {props.color} sx={{
        marginTop: '20px',
        marginBottom: '10px',
        width: 'full',
        height: 5,
        marginRight: '100px',
        marginLeft: '100px',
        
      }}/>
    )

}

export default Divider;