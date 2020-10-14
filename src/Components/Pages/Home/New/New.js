import React, { useEffect, useState } from 'react';
import Style from './New.module.css';
import Slider from '@farbenmeer/react-spring-slider';
import Card from './Card/Card';

export default function New({ formatNumb }) {
    const [Items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const onWidthChange = () => {
        setBrowserWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', onWidthChange);
        onWidthChange();
        return () => window.removeEventListener('resize', onWidthChange);
    });

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
            <div className={Style.title}>What's New?</div>

            <div className={Style.Slider}>
                {browserWidth < 600 ? (
                    <Slider hasBullets activeIndex={0} slidesAtOnce={2}>
                        {Items.map((item, index) => {
                            return <Card key={index} item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />;
                        })}
                    </Slider>
                ) : (
                    <Slider hasArrows activeIndex={0} slidesAtOnce={5}>
                        {Items.map((item, index) => {
                            return <Card key={index} item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />;
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
}
