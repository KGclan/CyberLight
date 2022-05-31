import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGame } from '../../store/reducers/gameReducer';
import { IRootState } from '../../store/store';

import styles from './registration.module.scss';

interface ITraining {
    closeModal: (arg: any) => any;
};

const Training = ({closeModal}: ITraining) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [secondTime, setSecondTime] = useState('');
    const [game, setGame] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState<undefined | string>();
    const dispatch = useDispatch();

    const games = useSelector((state: IRootState) => state.gamesDataStorage.games);

    const handleDateChange = (event: any) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event: any) => {
        setTime(event.target.value);
    };

    const handleSecondTimeChange = (event: any) => {
        setSecondTime(event.target.value);
    };

    const handleGameChange = (event: any) => {
        setGame(event.target.value);
    };

    const handlePhoneChange = (event: any) => {
        setPhone(event.target.value);
    };

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };


    return (
        <form className={styles.modal} style={{height: '340px'}}>
            <div className={styles.closeModal} onClick={() => closeModal(false)}></div>
            <h1>Заявка на тренировку</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="date">Дата</label>
                    <label htmlFor="firtsTime">Начало</label>
                    <label htmlFor="secondTime">Окончание</label>
                    <label htmlFor="name">ФИО</label>
                    <label htmlFor="phone">Номер телефона</label>
                    <label htmlFor="game">Игра</label>
                </div>
                <div>
                    <input
                        className={styles.myInput}
                        type="date"
                        id="date"
                        onChange={handleDateChange}
                        value={date}
                        required
                    />
                    <input
                        className={styles.myInput}
                        type="time"
                        id="time"
                        onChange={handleTimeChange}
                        value={time}
                        required
                    />
                    <input
                        className={styles.myInput}
                        type="time"
                        id="secondTime"
                        onChange={handleSecondTimeChange}
                        value={secondTime}
                        required
                    />
                    <input
                        className={styles.myInput}
                        type="text"
                        id="name"
                        onChange={handleNameChange}
                        value={name}
                        required
                    />
                    <input
                        className={styles.myInput}
                        type="tel"
                        id="phone"
                        onChange={handlePhoneChange}
                        value={phone}
                        required
                    />
                    <select className={styles.myInput} name="" id="">
                        {games.map((game: IGame) => <option value={game.title}>{game.title}</option>)}
                    </select>
                    {
                        errorMessage && <span className={styles.error}>{errorMessage}</span>
                    }
                </div>
            </div>
            <button
                onClick={() => {
                    closeModal(false);
                }}
                disabled={!!errorMessage}
                className={errorMessage && styles.disableButton}
            >
                Отправить
            </button>
        </form>
    );
};

export default Training;