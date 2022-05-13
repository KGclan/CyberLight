import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../store/store';

import styles from './leagueSelector.module.scss';

const LeagueSelector = () => {
    const dispatch = useDispatch();
    const selectedGameTitle = useSelector((state: IRootState) => state.gamesDataStorage.selectedGame);
    const [childrensLeague, majorLeague] = ['Детская лига', 'Основная лига'];

    const getSelectedLegueData = (league: string) => {
        dispatch({type: 'LOAD_MATCHS', payload: {title: selectedGameTitle, league}});
        dispatch({type: 'LOAD_PROFILES', payload: {title: selectedGameTitle, league}});
        dispatch({type: 'LOAD_TEAMS', payload: {title: selectedGameTitle, league}});
    };

    return (
        <section className={styles.leagueSelector}>
            <Link
                className={styles.leagueSelector__item}
                to=''
                onClick={() => {
                    getSelectedLegueData(childrensLeague);
                    dispatch({type: 'SET_LEAGUE', payload: {league: childrensLeague}});
                }}
            >
                {childrensLeague}
            </Link>
            <Link
                className={styles.leagueSelector__item}
                to=''
                onClick={() => {
                    getSelectedLegueData(majorLeague);
                    dispatch({type: 'SET_LEAGUE', payload: {league: majorLeague}});
                }}
            >
                {majorLeague}
            </Link>
        </section>
    );
};

export default LeagueSelector;