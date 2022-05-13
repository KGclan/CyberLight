import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/store';

import styles from './pagination.module.scss';

interface IPagination {
    tableType: 'games' | 'matchs' | 'players' | 'teams';
    game?: string;
};

const Pagination = ({game, tableType}: IPagination) => {
    const dispatch = useDispatch();
    const selectedLeague = useSelector((state: IRootState) => state.settings.league);
    const playersCount = useSelector((state: IRootState) => state.profilesDataStorage.totalCount);
    const matchsCount = useSelector((state: IRootState) => state.matchsDataStorage.totalCount);
    const gamesCount = useSelector((state: IRootState) => state.gamesDataStorage.totalCount);
    const teamsCount = useSelector((state: IRootState) => state.teamsDataStorage.totalCount);
    
    const getPageCount = (count: number) => Math.ceil(count / (tableType === 'matchs' ? 10 : 9));

    console.log(playersCount);
    
    const getButtonNumber = () => {
        switch (tableType) {
            case 'games': 
                return getPageCount(gamesCount) > 2 ? [1, 2, 3] : getPageCount(gamesCount) === 2 ? [1, 2] : [1];
            case 'players': 
                return getPageCount(playersCount) > 2 ? [1, 2, 3] : getPageCount(playersCount) === 2 ? [1, 2] : [1];
            case 'teams': 
                return getPageCount(teamsCount) > 2 ? [1, 2, 3] : getPageCount(teamsCount) === 2 ? [1, 2] : [1];
            default:
                return getPageCount(matchsCount) > 2 ? [1, 2, 3] : getPageCount(matchsCount) === 2 ? [1, 2] : [1];
        };
    };

    const [buttonNumber, setButtonNumber] = useState<number[]>(getButtonNumber());

    console.log(buttonNumber);


    const getRightPage = (offset: number, limit: number, title?: string) => {
        if (tableType === 'matchs') dispatch({type: 'LOAD_MATCHS', payload: {
            offset: (offset * 10) - 10,
            limit,
            title,
            league: selectedLeague,
        }});
        if (tableType === 'games') dispatch({type: 'LOAD_GAMES', payload: {offset: (offset * 9) - 9}});
        if (tableType === 'players') dispatch({type: 'LOAD_PROFILES', payload: {
            offset: (offset * 9) - 9,
            title,
            league: selectedLeague,
        }});
        if (tableType === 'teams') dispatch({type: 'LOAD_TEAMS', payload: {
            offset: (offset * 9) - 9,
            title,
            league: selectedLeague,
        }});
    };

    return (
        <div className={tableType === 'matchs' ? styles.wrapperMatchs : styles.wrapper}>
            {
                buttonNumber.length > 3 &&
                <button
                    className={styles.paginationButton}
                    onClick={() => setButtonNumber(buttonNumber.map((item) => item - 1))}
                >
                    &#9668;
                </button>
            }
            {
                buttonNumber.length > 1 && buttonNumber.map((item) => (
                    <button
                        className={styles.paginationButton}
                        onClick={() => getRightPage(item, 10, game)}
                    >
                        {item}
                    </button>
                ))
            }
            {
                buttonNumber.length > 3 &&
                <button
                    className={styles.paginationButton}
                    onClick={() => setButtonNumber(buttonNumber.map((item) => item + 1))}
                >
                    &#9658;
                </button>
            }
        </div>
    );
};

export default Pagination;