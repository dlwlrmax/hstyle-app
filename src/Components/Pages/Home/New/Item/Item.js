import React, { useRef, useEffect } from 'react';
import Style from './Item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../../EX-Collections/Items/Image/Image';
import { faEye, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';

export default function Item({ item, addItemToFav }) {
    const empHeart = <FontAwesomeIcon icon={emptyHeart} />;
    const fulHeart = <FontAwesomeIcon style={{ color: '#d72d2d' }} icon={fullHeart} />;
    const thumbRef = useRef(null);
    const thumbWidth = useRef(null);
    const thumbHeight = useRef(null);

    useEffect(() => {
        if (thumbRef.current) {
            thumbWidth.current = thumbRef.current.offsetWidth;
            thumbHeight.current = thumbRef.current.offsetHeight;
        }
    }, []);
    return (
        <div className={Style.image}>
            <img src={item.thumb} alt='dim' ref={thumbRef} />
            <div className={Style.like} onClick={() => addItemToFav(item.id)}>
                {item.isFav ? fulHeart : empHeart}
            </div>{' '}
            <div className={Style.view}>
                <FontAwesomeIcon icon={faEye} />
            </div>
            <div className={Style.hover}>
                <Image image={item.image[1]} thumbWidth={thumbWidth.current} thumbHeight={thumbHeight} />
            </div>
        </div>
    );
}
