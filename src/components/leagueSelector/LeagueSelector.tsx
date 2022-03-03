import React from 'react';
import {Link} from 'react-router-dom';

import styles from './leagueSelector.module.scss';

const LeagueSelector = () => {
    return (
        <section className={styles.leagueSelector}>
            <Link className={styles.leagueSelector__item} to='#'>Начальная лига</Link>
            <Link className={styles.leagueSelector__item} to='#'>Основная лига</Link>
            <Link className={styles.leagueSelector__item} to='#'>Высшая лига</Link>
        </section>
    );
}

export default LeagueSelector;