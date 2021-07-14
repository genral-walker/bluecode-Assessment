
import React from 'react';
import styles from './Navigation.module.scss'

import { ReactComponent as Cube } from '../../assets/svgs/cube.svg';
import { ReactComponent as Home } from '../../assets/svgs/home.svg';
import { ReactComponent as Message } from '../../assets/svgs/message.svg';
import { ReactComponent as Rank } from '../../assets/svgs/ranking.svg';
import { ReactComponent as Challenge } from '../../assets/svgs/challenge.svg';
import { ReactComponent as Party } from '../../assets/svgs/party.svg';
import { ReactComponent as Connect } from '../../assets/svgs/connect.svg';
import { ReactComponent as Parade } from '../../assets/svgs/parade.svg';
import { ReactComponent as Group } from '../../assets/svgs/group.svg';


const Navigation = ({ isNavShown }) => {

    return (
        <aside className={styles.body} style={isNavShown ? { transform: 'translateX(0)' } : {}}>
            <div className={styles.header}>
                <Cube />
                <h1>bluecube</h1>
            </div>

            <div className={styles.profile}>
                <div>
                    <span></span>
                </div>

                <select>
                    <option>Abigail</option>
                    <option>Micheal</option>
                </select>
            </div>

            <button className={styles.home}>
                <Home /> <span>Home</span>
            </button>

            <button>
                <Message />
                <span>Message</span>
            </button>

            <p className={styles.share}>SHARE</p>

            <button>
                <Rank />
                <span>Ranking</span>
            </button>

            <button>
                <Challenge />
                <span>Challenge</span>
            </button>

            <button>
                <Party />
                <span>Party</span>
            </button>

            <button>
                <Connect />
                <span>Connect</span>
            </button>

            <button>
                <Parade />
                <span>Parade</span>
            </button>

            <button>
                <Group />
                <span>Group</span>
            </button>
        </aside>
    )
};
export default Navigation;