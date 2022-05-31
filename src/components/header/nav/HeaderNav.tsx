import cn from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../store/api";
import { IRootState } from "../../../store/store";
import Registration from "../../modal/Registration";
import Training from "../../modal/Training";

import styles from "./header_nav.module.scss";

const HeaderNav = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const dispatch = useDispatch();
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const auth = useSelector((state: IRootState) => state.settings.auth);

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
                    {   
                        !auth && 
                            <Link
                                to='#'
                                className={styles.nav__item}
                                onClick={() => !isAuthModalOpen && setIsRegistrationModalOpen(!isRegistrationModalOpen)}
                            >
                                Регистрация
                            </Link>
                    }
                    {
                        !auth ?
                            <Link
                                to='#'
                                className={styles.nav__item}
                                onClick={() => !isRegistrationModalOpen && setIsAuthModalOpen(!isAuthModalOpen)}
                            >
                                Войти
                            </Link>
                        : <Link
                            to='#'
                            className={styles.nav__item}
                            onClick={() => dispatch({type: 'LOGOUT'})}
                        >
                            Выйти
                        </Link>
                    }
                    {
                        auth
                            && <Link
                                    to='#'
                                    className={styles.nav__item}
                                    onClick={() => setIsTrainingModalOpen(!isTrainingModalOpen)}
                                >
                                    Заявка на тренировку
                                </Link>
                    }
                </nav>
                <div
                    className={cn(styles.burger_button,
                        { [styles.burger_button_active]: isBurgerActive })}
                    onClick={() => setIsBurgerActive(!isBurgerActive)}
                >
                </div>
                {
                    isRegistrationModalOpen
                        ? <Registration closeModal={setIsRegistrationModalOpen} type='registration' />
                        : isAuthModalOpen ? <Registration closeModal={setIsAuthModalOpen} type='auth' />
                        : ''
                }
                {
                    isTrainingModalOpen ? <Training closeModal={setIsTrainingModalOpen}/> : ''
                }
            </div>
        </div>
    );
};

export default HeaderNav;