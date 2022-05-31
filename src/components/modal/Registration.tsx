import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './registration.module.scss';

interface IRegistration {
    closeModal: (arg: any) => any;
    type: 'registration' | 'auth';
};

const Registration = ({closeModal, type}: IRegistration) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<undefined | string>();
    const dispatch = useDispatch();

    const handleLoginChange = (event: any) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSecondPasswordChange = (event: any) => {
        setSecondPassword(event.target.value);
    };

    useEffect(() => {
        if (type === 'registration') {
            if (password === secondPassword) {
                setErrorMessage(undefined);
            } else {
                setErrorMessage('Пароли не совпадают');
            }
        }
    }, [password, secondPassword]);

    return (
        <div className={styles.modal}>
            <div className={styles.closeModal} onClick={() => closeModal(false)}></div>
            <h1>{type === 'registration' ? 'Регистрация' : 'Авторизация'}</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="login">Логин</label>
                    <label htmlFor="firtsPassword">Пароль</label>
                    {type === 'registration' && <label htmlFor="secondPassword">Повторите пароль</label>}
                </div>
                <div>
                    <input
                        className={styles.myInput}
                        autoComplete="new-password" 
                        type="text"
                        id="login"
                        onChange={handleLoginChange}
                        value={login}
                    />
                    <input
                        className={styles.myInput}
                        autoComplete="new-password"
                        type="password"
                        id="firtsPassword"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                    {
                        type === 'registration'
                            && <input
                                    className={styles.myInput}
                                    autoComplete="new-password"
                                    type="password"
                                    id="secondPassword"
                                    onChange={handleSecondPasswordChange}
                                    value={secondPassword}
                                />
                    }
                    {
                        errorMessage && <span className={styles.error}>{errorMessage}</span>
                    }
                </div>
            </div>
            <button
                onClick={() => {
                    type === 'auth'
                        ? dispatch({type: 'LOGIN', payload: {user: login, password}})
                        : dispatch({type: 'REGISTRATION', payload: {user: login, password}});
                    closeModal(false);
                }}
                disabled={!!errorMessage}
                className={errorMessage && styles.disableButton}
            >
                {type === 'auth' ? 'Войти' : 'Зарегистрироваться'}
            </button>
        </div>
    );
};

export default Registration;