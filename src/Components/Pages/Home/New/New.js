import React, { useEffect, useState } from 'react';
import Style from './New.module.css';
import { useSpring, animated } from 'react-spring';
import Slider from '@farbenmeer/react-spring-slider';
import Item from './Item/Item';

export default function New() {
    const [Items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/products?sort=date&&order=desc%&&_page=1&_limit=10');
            const data = await res.json();
            console.log(data);
            setItems(data);
            setLoading(false);
        }

        getData();
    }, []);

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

    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={Style.New}>
            <animated.div style={props} className={Style.title}>
                What's New?
            </animated.div>

            <div className={Style.Slider}>
                <Slider hasArrows activeIndex={0} slidesAtOnce={5}>
                    {Items.map((item, index) => {
                        return (
                            <div className={Style.Item} key={index}>
                                <Item item={item} addItemToFav={addItemToFav} />
                                <div className={Style.info}>
                                    <div className={Style.itemName}>{item.name}</div>
                                    <div className={Style.description}>{item.desc}</div>
                                    <div className={Style.price}>
                                        <div className={Style.sale}>
                                            <span>{formatNumb((item.price * (100 - item.sale)) / 100)}</span>
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
