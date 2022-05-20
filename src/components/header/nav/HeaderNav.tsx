import cn from "classnames";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import styles from "./header_nav.module.scss";

const HeaderNav = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className={styles.header_nav}>
            <div className={styles.container}>
                <p className={styles.logo}>Cyber Light</p>
                <nav
                    className={cn(styles.nav,
                        {[styles.burger_open]: isBurgerActive })}
                >
                    <Link
                        to="/"
                        className={styles.nav__item}
                        onClick={() => dispatch({type: 'LOAD_GAMES', payload: {offset: 0}})}
                    >
                        Игры
                    </Link>
                    <Link
                        to="/news"
                        className={styles.nav__item}
                    >
                        Новости
                    </Link>
                </nav>
                <div
                    className={cn(styles.burger_button,
                        { [styles.burger_button_active]: isBurgerActive })}
                    onClick={() => setIsBurgerActive(!isBurgerActive)}
                >
                </div>
            </div>
        </div>
    )
}

export default HeaderNav;