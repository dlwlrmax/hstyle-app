import React from 'react';
import Style from './From.module.css';
export default function From() {
    return (
        <div className={Style.From}>
            <div className={Style.title}>Message us</div>
            <div className={Style.fromContainer}>
                <form method='post' className={Style.formContent}>
                    <div className={Style.group}>
                        <label htmlFor='name'>Your Name:</label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className={Style.group}>
                        <label htmlFor='email'>Your Email:</label>
                        <input type='text' name='email' id='email' />
                    </div>
                    <div className={Style.group}>
                        <label htmlFor='message'>Your Message:</label>
                        <textarea name='message' row='200' id='message' />
                    </div>
                </form>
                <button className={Style.btn}>Send</button>
            </div>
        </div>
    );
}
