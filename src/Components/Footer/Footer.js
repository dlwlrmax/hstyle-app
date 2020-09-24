import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faStreetView, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = props => {
    return (
        <div className='Footer'>
            <div className='footer-group'>
                <div className='brand-container'>
                    <div className='footer-brand '>
                        <div>H-STYLE</div>
                        <div>Fashion</div>
                    </div>
                    <div className='text'>
                        <p>HanDuYiShe (HSTYLE) is a Chinese brand specializing in Korean fast fashion style.</p>
                        <p>
                            As of October 2011, HSTYLE owned 23 operating departments and had more than 1,100 employees. The brand has developed six
                            sub-brands including HSTYLE, AMH, MiniZaru, Soneed, niBBuns, and SOULINE.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer-group'>
                <div className='footer-title'>Follow us:</div>
                <div className='social-link'>
                    <a href='/'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className='social-text'>Facebook</div>
                    </a>
                    <a href='/'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className='social-text'>Twitter</div>
                    </a>
                    <a href='/'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                        <div className='social-text'>Youtube</div>
                    </a>
                    <a href='/'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </div>
                        <div className='social-text'>Instagram</div>
                    </a>
                </div>
            </div>
            <div className='footer-group'>
                <div className='footer-title'>Contact us:</div>
                <div className='social-link'>
                    <a href='/'>
                        <div className='icon'>
                            {' '}
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className='social-text'>hstyle@htyle.hstyle</div>
                    </a>
                    <a href='/'>
                        <div className='icon'>
                            {' '}
                            <FontAwesomeIcon icon={faStreetView} />
                        </div>
                        <div className='social-text'>9882 W. Homestead St. Cary, NC 27511</div>
                    </a>
                    <a href='/'>
                        <div className='icon'>
                            {' '}
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='social-text'>410-788-7133</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
