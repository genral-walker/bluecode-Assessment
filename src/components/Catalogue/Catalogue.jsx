
import React from 'react';
import styles from './Catalogue.module.scss';
import { ReactComponent as Location } from '../../assets/svgs/location.svg';
import { ReactComponent as Heart } from '../../assets/svgs/heart-oepn.svg';
import { ReactComponent as Dislike } from '../../assets/svgs/dislike.svg';

const Catalogue = () => {
    return (
        <div className={styles.body}>

            <div>
                <h2>Jack, 23</h2>
                <p><Location /> Florida, USA</p>
            </div>

            <div>
                <h2>Jack, 23</h2>
                <p><Location /> Florida, USA</p>

                <span className={styles.yes}>
                    <button>
                        <Heart />
                    </button>
                    <button>
                        <Dislike />
                    </button>
                </span>

            </div>

        </div>
    )
};

export default Catalogue;
