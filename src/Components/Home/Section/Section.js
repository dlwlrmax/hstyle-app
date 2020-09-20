import React from 'react';

import './Section.css';

const Section = props => {
    const boxStyle = {
        backgroundColor: props.boxColor,
    };
    const sectionBG = {
        backgroundColor: props.bgColor,
    };
    return (
        <div className={'Section ' + props.direction} style={sectionBG}>
            <div className={'skewed' + props.transform}></div>
            <div className={'section-content ' + props.direction}>
                <div className={'box-container ' + props.direction}>
                    <div className={' bg-box ' + props.direction} style={boxStyle}>
                        <div className={'slogan ' + props.dNone}>
                            <p>“A classic that is loved by all.”</p>
                            <p> - Elsie-Rose Arroyo - </p>
                        </div>
                    </div>
                    <div className={'box-title ' + props.direction}>{props.boxTitle}</div>
                </div>
                {props.children}
            </div>
            <div className={'section-title ' + props.direction}>
                <p>{props.sectionTitle}</p>
            </div>
        </div>
    );
};

export default Section;
