import React, { useEffect, useState } from 'react';
import Style from './New.module.css';
import { useSpring, animated } from 'react-spring';
import { faEye, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import Slider from '@farbenmeer/react-spring-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../EX-Collections/Items/Image/Image';

export default function New() {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/products?sort=date&&order=desc%&&_page=1&_limit=10');
            const data = await res.json();
            console.log(data);
            setItems(data);
        }

        getData();
    }, []);
    const empHeart = <FontAwesomeIcon icon={emptyHeart} />;
    const fulHeart = <FontAwesomeIcon style={{ color: '#d72d2d' }} icon={fullHeart} />;

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    const formatNumb = numb => {
        return Intl.NumberFormat().format(numb);
    };

    const addItemToFav = id => {
        const currIndex = Items.findIndex(item => item.id === id);
        let newItems = [...Items];
        newItems[currIndex].isFav = !newItems[currIndex].isFav;
        setItems(newItems);
    };

    const viewItem = id => {
        //
    };

    return (
        <div className={Style.New}>
            <animated.div style={props} className={Style.title}>
                What's New?
            </animated.div>

            <div className={Style.Slider}>
                <Slider hasArrows activeIndex={0} slidesAtOnce={5}>
                    {Items.map((item, index) => {
                        return (
                            <div className={Style.Item} key={index}>
                                <div className={Style.image}>
                                    <img src={item.thumb} alt='dim' />
                                    <div className={Style.like} onClick={() => addItemToFav(item.id)}>
                                        {item.isFav ? fulHeart : empHeart}
                                    </div>{' '}
                                    <div className={Style.view}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </div>
                                    <div className={Style.hover}>
                                        <Image image={item.image[1]} />
                                    </div>
                                </div>
                                <div className={Style.info}>
                                    <div className={Style.itemName}>{item.name}</div>
                                    <div className={Style.description}>{item.desc}</div>
                                    <div className={Style.price}>
                                        <div className={Style.sale}>
                                            <span>{formatNumb((item.price * item.sale) / 100)}</span>
                                            <span className={Style.fullPrice}>{formatNumb(item.price)}</span>
                                        </div>
                                        <div className={Style.percent}>{item.sale}%</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
