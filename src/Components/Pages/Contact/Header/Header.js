import React from 'react';
import Style from './Header.module.css';

export default function Header() {
    return (
        <div className={Style.Header}>
            <div className={Style.leftContent}>
                <div className={Style.title}>Get in touch</div>
                <div className={Style.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia fugit aperiam ea ipsa laudantium natus harum nostrum?
                    Reprehenderit eius molestiae architecto, non doloribus consequuntur et consectetur fugiat labore est quam quo ipsa fugit totam
                    nulla cum repellendus. Non autem enim id illo aperiam? Voluptates suscipit dicta est voluptate. Eum veniam voluptates praesentium
                    deserunt modi quaerat impedit aliquid distinctio iusto doloremque quasi commodi explicabo similique non dolorem, consequuntur t?
                </div>
            </div>
            <div className={Style.rightContent}>
                <div className={Style.image}>
                    <img src='https://i.imgur.com/CDPwm13.jpg' alt='images' />
                </div>
            </div>
        </div>
    );
}
