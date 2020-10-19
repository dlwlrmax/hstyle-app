import React, { useState, useEffect } from 'react';
import Style from './Shop.module.css';
import Masonry from 'react-masonry-component';
import Sidebar from './Sidebar/Sidebar';
import Card from '../Home/New/Card/Card';
import { motion } from 'framer-motion';

export default function Shop({ Items, addItemToFav }) {
    document.title = 'Shop';
    const [displayItems, setDisplayItem] = useState(Items);
    const [filter, setFilter] = useState('all');
    const masonryOptions = {
        transition: 0.5,
        columnWidth: 50,
        gutter: 30,
    };
    const filterItems = () => {
        if (filter === 'all') {
            setDisplayItem(Items);
        } else {
            const _filterItems = Items.filter(item => item.category === filter);
            setDisplayItem(_filterItems);
        }
    };
    useEffect(() => {
        const filterItems = () => {
            if (filter === 'all') {
                setDisplayItem(Items);
            } else {
                const _filterItems = Items.filter(item => item.category === filter);
                setDisplayItem(_filterItems);
            }
        };
        filterItems();
    }, [filter, Items]);

    useEffect(() => {
        setDisplayItem(Items);
    }, [Items]);
    const getFilter = e => {
        setFilter(e.target.value);
    };
    const formatNumb = numb => {
        return Intl.NumberFormat().format(numb);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={Style.Shop}>
            <div className={Style.Title}>Our Product</div>
            <div className={Style.container}>
                <div className={Style.sidebar}>
                    <Sidebar Items={Items} getFilter={getFilter} filterItems={filterItems} />
                </div>
                <div className={Style.Items}>
                    <Masonry
                        className={'my-gallery-class'}
                        elementType={'ul'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}>
                        {displayItems
                            ? displayItems.map((item, index) => {
                                  return (
                                      <div className={Style.Item} key={index}>
                                          <Card key={index} item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />
                                      </div>
                                  );
                              })
                            : null}
                    </Masonry>
                </div>
            </div>
        </motion.div>
    );
}
