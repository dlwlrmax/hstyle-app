import React, { useRef, useState } from 'react';
import Style from './Image.module.css';

let zoomWidth = 0;
let zoomHeight = 0;
let offX = 0;
let offY = 0;
let zoomLevel = 2;

export default function Image({ image, thumbWidth, thumbHeight }) {
    const [isHidden, setZoomState] = useState('');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imageSource = useRef(null);

    const getMousePos = e => {
        setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
        console.log(mousePos.x, mousePos.y);
    };

    const resetCursor = () => {
        setZoomState('');
    };

    const activeMagnify = () => {
        setZoomState('show');
        zoomWidth = imageSource.current.offsetWidth * zoomLevel;
        zoomHeight = imageSource.current.offsetHeight * zoomLevel;
        offX = (zoomWidth - thumbWidth) / 2;
        offY = 50;
    };

    let zoom = {
        top: mousePos.y,
        left: mousePos.x,
        backgroundImage: 'url(' + image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: -mousePos.x * zoomLevel + offX - 150,
        backgroundPositionY: -mousePos.y * zoomLevel + offY,
        backgroundSize: `${zoomWidth}px ${zoomHeight}px`,
    };
    return (
        <div className={Style.productImage} onMouseEnter={activeMagnify} onMouseOut={resetCursor}>
            <img src={image} alt='product1' onMouseMove={getMousePos} ref={imageSource} />
            <div className={Style.magnify + ' ' + isHidden} style={zoom}></div>
        </div>
    );
}
