/**
 * author: Patrick Vyn Badiang
 * 
 * description:
 * Is called by the CarouselTemplate
 */
import { Paper } from '@mui/material'

function Item({item})
{
    return (
        <Paper style = {{alignItems: 'center'}}>
            <img src={item.img} alt = {item.title} 
            
            style = {{width:"100%", maxHeight:"500px" }}/>
        </Paper>
    )
}

export default Item;