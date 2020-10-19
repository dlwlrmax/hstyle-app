import { motion } from 'framer-motion';
import React from 'react';
import Style from './CollectionsPage.module.css';
export default function CollectionsPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={Style.CollectionPage}>
            <div className={Style.header}>
                <div className={Style.title}>J.estina</div>
                <div className={Style.subtitle}>falling in jewelry</div>
            </div>
            <div className={Style.headerImage}>
                <img src='https://i.imgur.com/qOfjXtD.jpg' alt='q' />
                <div className={Style.product}>
                    <div className={Style.item}>
                        <img src='https://i.imgur.com/FU3RvNA.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>
                    <div className={Style.item}>
                        <img src='https://i.imgur.com/pzxSJMH.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>{' '}
                    <div className={Style.item}>
                        <img src='https://i.imgur.com/bJp4sXM.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className={Style.Section}>
                <div className={Style.product}>
                    <div className={Style.item}>
                        <img src='https://i.imgur.com/XgO8Unr.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>

                    <div className={Style.item}>
                        <img src='https://i.imgur.com/O6naMlE.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className={Style.image}>
                    <img src='https://i.imgur.com/XsyTKKt.jpg' alt='q' />
                </div>
            </div>
            <div className={Style.Section}>
                <div className={Style.image}>
                    <img src='https://i.imgur.com/vCGdjkJ.jpg' alt='q' />
                </div>
                <div className={Style.product}>
                    <div className={Style.item}>
                        <img src='https://i.imgur.com/4Soks3g.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>

                    <div className={Style.item}>
                        <img src='https://i.imgur.com/xKCXutc.png' alt='w' />
                        <div className={Style.name}>J.estina Jewelry</div>
                        <div className={Style.price}>$322</div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
