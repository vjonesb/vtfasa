/**
 * author: Patrick Vyn Badiang
 * 
 * NOT IMPLEMENTED
 * 
 * description:
 * Pass in an array of images whenever you want a new carousel of images
 */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

const CarouselTemplate = (props) =>
{

    return (
        <Carousel>
            {
                props.images.map( (item, i) => <Item key={props.images.id} item={item} /> )
            }
        </Carousel>
    )
}

export default CarouselTemplate;