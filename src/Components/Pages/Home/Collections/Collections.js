import React from 'react';
import Style from './Collections.module.css';
export default function Collections() {
    return (
        <div className={Style.Collection}>
            <div className={Style.Title}>Our Collection</div>
            <div className={Style.Items}>
                <div className={Style.Item}>
                    <div className={Style.text}>H-style</div>

                    <div className={Style.image}>
                        <div className={Style.dropShadow}></div>
                        <img src='https://i.imgur.com/rdOM1F7h.png' alt='an' />
                    </div>
                </div>
                <div className={Style.Item}>
                    <div className={Style.text}>J.estina</div>

                    <div className={Style.image}>
                        <div className={Style.dropShadow}></div>
                        <img src='https://i.imgur.com/QjNXLieh.jpg' alt='an' />
                    </div>
                </div>
                <div className={Style.Item}>
                    <div className={Style.text}>Vedi Vero</div>

                    <div className={Style.image}>
                        <div className={Style.dropShadow}></div>
                        <img src='https://i.imgur.com/6Vo09wGh.jpg' alt='an' />
                    </div>
                </div>
            </div>
        </div>
    );
}
