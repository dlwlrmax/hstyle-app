import React, { useRef, useState } from 'react';
import Style from './Image.module.css';

let zoomWidth = 0;
let zoomHeight = 0;

let zoomLevel = 3;
export default function Image({ image }) {
    const [isHidden, setZoomState] = useState('');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imageSource = useRef(null);

    const getMousePos = e => {
        setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const resetCursor = () => {
        setZoomState('');
    };

    const activeMagnify = () => {
        setZoomState('show');
        zoomWidth = imageSource.current.offsetWidth * zoomLevel;
        zoomHeight = imageSource.current.offsetHeight * zoomLevel;
    };

    let zoom = {
        top: mousePos.y,
        left: mousePos.x,
        backgroundImage: 'url(' + image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: -mousePos.x * zoomLevel + 50,
        backgroundPositionY: -mousePos.y * zoomLevel + 50,
        backgroundSize: `${zoomWidth}px ${zoomHeight}px`,
    };
    return (
        <div className={Style.productImage} onMouseEnter={activeMagnify} onMouseOut={resetCursor}>
            <img src={image} alt='product1' onMouseMove={getMousePos} ref={imageSource} />
            <div className={Style.magnify + ' ' + isHidden} style={zoom}></div>
        </div>
    );
}
