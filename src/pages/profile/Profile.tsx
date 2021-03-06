import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IRootState } from '../../store/store';

import styles from './profile.module.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [userData] = useSelector((state: IRootState) => state.profilesDataStorage.profiles);
    
    useEffect(() => {
        dispatch({type: 'LOAD_PROFILE', payload: {id}});
    }, []);

    if (userData) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.profileCard}>
                    <div className={styles.left}>
                        <p className={styles.name}>{userData.nickname}</p>
                        <p className={styles.status}>{userData.status.status}</p>
                        <img
                            style={{width: '250px', height: '350px', marginTop: '25px'}}
                            src={userData.image}
                        />
                        <button>Редактировать</button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.description}>
                            <h1>О себе</h1>
                            <p>{userData.about_me}</p>
                        </div>
                        <div className={styles.contacts}>
                            <h3>Контакты</h3>
                            <div>
                                <p>{userData.email}</p>
                                <p>ВКонтакте</p>
                                <p>{userData.phone}</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h2>Информация</h2>
                            <div>
                                <p>Поражения: {userData.lose}</p>
                                <p>Победы: {userData.win}</p>
                                <p>Возраст: {userData.age}</p>
                            </div>
                            <div>
                                <p>Рейтинг: {userData.rating}</p>
                                <p>{userData.league.league}</p>
                                <p>Команда: {userData.team}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return <div>Подгрузка данных!!!</div>;
    
};

export default Profile;
