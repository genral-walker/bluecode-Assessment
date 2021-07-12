
import React from 'react';
import styles from './ChatBox.module.scss';
import { ReactComponent as Heart } from '../../assets/svgs/heart.svg';
import pix from '../../assets/images/man.png';

const ChatBox = () => {

    return (
        <div className={styles.body}>
            <div className={styles.arrow}></div>

            <div className={styles.chat}>
                <img src={pix} />

                <p>Micheal liked you! <br /> About 20 minutes ago</p>

                <Heart style={{ fill: '#87859a' }} />
            </div>

            <div className={styles.chat}>
                <img src={pix} />

                <p>Micheal liked you! <br /> About 20 minutes ago</p>

                <Heart style={{ fill: '#c83436' }} />
            </div>

            <div className={styles.chat}>
                <img src={pix} />

                <p>Micheal liked you! <br /> About 20 minutes ago</p>

                <Heart style={{ fill: '#382ea0' }} />
            </div>
        </div>
    )
};

export default ChatBox;
