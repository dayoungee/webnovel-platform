import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styles from "../style/components/_slider.module.scss"


function Item(props)
{
    return (
        <a href={props.item.link} target={'_blank'}>
        <img className={styles.image} src={props.item.src}></img>
        </a>

    )
}

const Slider = ()=>{

    const items = [
        {
            src: 'https://user-images.githubusercontent.com/55998706/164469875-89a77064-9d65-49c5-bb20-c180b237893a.png',
            link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=286334791'
        },
        {
           src: 'https://user-images.githubusercontent.com/55998706/164469879-9a38e0a5-37a9-4489-9052-07836fa7430c.png',
            link: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=275874117'
        }
    ]

    return(
        <Carousel autoPlay={true} animation = {"slide"} navButtonsAlwaysVisible = {true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Slider;