import React, { useEffect, useState } from 'react';
import Style from './Shop.module.css';
import Masonry from 'react-masonry-component';
import Sidebar from './Sidebar/Sidebar';
import Card from '../Home/New/Card/Card';

export default function Shop({ getCartId }) {
    document.title = 'Shop';
    const masonryOptions = {
        transition: 0.5,
        columnWidth: 50,
        gutter: 30,
    };
    const [Items, setItems] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/products?sort=date&&order=desc%&&_page=1&_limit=15');
            const data = await res.json();
            console.log(data);
            setItems(data);
        }

        getData();
    }, []);
    const formatNumb = numb => {
        return Intl.NumberFormat().format(numb);
    };

    const addItemToFav = id => {
        getCartId(id);
        const currIndex = Items.findIndex(item => item.id === id);
        let newItems = [...Items];
        newItems[currIndex].isFav = !newItems[currIndex].isFav;
        setItems(newItems);
        fetch('https://h-style-data.herokuapp.com/cart', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(newItems[currIndex]),
        }).then(response => {
            //do something awesome that makes the world a better place
        });
    };
    return (
        <div className={Style.Shop}>
            <div className={Style.Title}>Our Product</div>
            <div className={Style.container}>
                <div className={Style.sidebar}>
                    <Sidebar />
                </div>
                <div className={Style.Items}>
                    <Masonry
                        className={'my-gallery-class'}
                        elementType={'ul'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}>
                        {Items.map((item, index) => {
                            return (
                                <div className={Style.Item} key={index}>
                                    <Card key={index} item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />
                                </div>
                            );
                        })}
                    </Masonry>
                </div>
            </div>
        </div>
    );
}
