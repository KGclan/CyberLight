import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardTable from '../../components/cardTable/CardTable';
import { IRootState } from '../../store/store';

import styles from './team.module.scss';

const Team = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [teamData] = useSelector((state: IRootState) => state.teamsDataStorage.teams);
    const profiles = useSelector((state: IRootState) => state.profilesDataStorage.profiles);
    
    useEffect(() => {
        dispatch({type: 'LOAD_TEAM', payload: {id}});
    }, []);

    useEffect(() => {
        if (teamData) dispatch({type: 'LOAD_PROFILES', payload: {league: '', team: teamData.title || ''}});
    }, [teamData]);

    if (teamData && profiles) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.profileCard}>
                    <div className={styles.left}>
                        <p className={styles.name}>{teamData.title}</p>
                        <p className={styles.status}>Команда</p>
                        <img
                            style={{width: '350px', marginTop: '25px'}}
                            src={teamData.logo}
                        />
                        <button>Редактировать</button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.description}>
                            <h1>О себе</h1>
                            <p>{teamData.description}</p>
                        </div>
                        <div className={styles.contacts}>
                            <h3>Контакты</h3>
                            <div>
                                <p>email</p>
                                <p>ВКонтакте</p>
                                <p>89525801328</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h2>Информация</h2>
                            <div>
                                <p>Поражения: {teamData.lose}</p>
                                <p>Победы: {teamData.win}</p>
                                <p>Возраст: </p>
                            </div>
                            <div>
                                <p>tewpijtwepijtw</p>
                                <p>Основная лига</p>
                                <p>Команда: NAVI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CardTable
                    variable='profiles'
                    arrayData={profiles}
                />
            </div>
        );
    } else return <div>Подгрузка данных!!!</div>;
};

export default Team;