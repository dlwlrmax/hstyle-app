import React, { useRef } from 'react';
import Style from './New.module.css';
import { useSpring, animated } from 'react-spring';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import Slider from '@farbenmeer/react-spring-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Items = [
    'https://i.imgur.com/5zjSstuh.jpg',
    'https://i.imgur.com/x1EOLPxh.png',
    'https://i.imgur.com/PNNDaA3h.jpg',
    'https://i.imgur.com/hMIrzQvh.png',
    'https://i.imgur.com/2qbIXyRh.jpg',
    'https://i.imgur.com/vCGdjkJh.jpg',
    'https://i.imgur.com/k3KAZM6h.jpg',
    'https://i.imgur.com/ko2tpyhh.jpg',
];

export default function New() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });
    const ref = useRef(null);

    const heartIcon = <FontAwesomeIcon icon={emptyHeart} />;
    const fullHeartIcon = <FontAwesomeIcon icon={fullHeart} />;
    const changeHeart = e => {
        console.log(e.target.value);
        e.target.value = fullHeartIcon;
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
                                    <img src={item} alt='dim' />
                                    <div className={Style.like} ref={ref} onClick={changeHeart}>
                                        {heartIcon}
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
                </Slider>
            </div>
        </div>
    );
}
