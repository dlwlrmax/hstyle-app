import React from 'react';
import Style from './Shop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import Masonry from 'react-masonry-component';
import Sidebar from './Sidebar/Sidebar';
const ITEMS = [
    'https://i.imgur.com/5zjSstul.jpg',
    'https://i.imgur.com/x1EOLPxl.png',
    'https://i.imgur.com/CDPwm13l.jpg',
    'https://i.imgur.com/PNNDaA3l.jpg',
    'https://i.imgur.com/vCGdjkJl.jpg',
    'https://i.imgur.com/2qbIXyRl.jpg',
    'https://i.imgur.com/rrieUVdl.png',
    'https://i.imgur.com/2qbIXyRl.jpg',
    'https://i.imgur.com/cq6sIlil.jpg',
    'https://i.imgur.com/QjNXLiel.jpg',
    'https://i.imgur.com/vCGdjkJl.jpg',
    'https://i.imgur.com/k3KAZM6l.jpg',
    'https://i.imgur.com/ko2tpyhl.jpg',
];
export default function Shop() {
    document.title = 'Shop';
    const masonryOptions = {
        transition: 0.5,
        columnWidth: 50,
        gutter: 30,
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
                        {ITEMS.map((image, index) => {
                            return (
                                <div className={Style.Item} key={index}>
                                    <div className={Style.image}>
                                        <img src={image} alt='dim' />
                                        <div className={Style.like}>
                                            <FontAwesomeIcon icon={emptyHeart} />
                                        </div>
                                    </div>
                                    <div className={Style.info}>
                                        <div className={Style.itemName}>Goache</div>
                                        <div className={Style.description}>Lorem ipsum dolor sit amet consectetur</div>
                                        <div className={Style.price}>
                                            <div className={Style.sale}>
                                                <span>2032</span>
                                                <span className={Style.fullPrice}>2222</span>
                                            </div>
                                            <div className={Style.percent}>10%</div>
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
