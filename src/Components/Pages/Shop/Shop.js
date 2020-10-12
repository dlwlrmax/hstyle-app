import React, { useEffect, useState } from 'react';
import Style from './Shop.module.css';
import Masonry from 'react-masonry-component';
import Sidebar from './Sidebar/Sidebar';
import { faEye, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Shop() {
    document.title = 'Shop';
    const masonryOptions = {
        transition: 0.5,
        columnWidth: 50,
        gutter: 30,
    };
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
    const formatNumb = numb => {
        return Intl.NumberFormat().format(numb);
    };

    const addItemToFav = id => {
        const currIndex = Items.findIndex(item => item.id === id);
        let newItems = [...Items];
        newItems[currIndex].isFav = !newItems[currIndex].isFav;
        setItems(newItems);
    };
    const empHeart = <FontAwesomeIcon icon={emptyHeart} />;
    const fulHeart = <FontAwesomeIcon style={{ color: '#d72d2d' }} icon={fullHeart} />;
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
                                    <div className={Style.image}>
                                        <img src={item.thumb} alt='dim' />
                                        <div className={Style.like} onClick={() => addItemToFav(item.id)}>
                                            {item.isFav ? fulHeart : empHeart}
                                        </div>{' '}
                                        <div className={Style.view}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </div>
                                        <div className={Style.hover}>
                                            <img src={item.image[1]} />
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
                    </Masonry>
                </div>
            </div>
        </div>
    );
}
