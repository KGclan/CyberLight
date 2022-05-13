import React from "react";
import { useSelector } from "react-redux";

import Card from "../../modules/UI/card/card/Card";
import { IGame } from "../../store/reducers/gameReducer";
import { IProfile } from "../../store/reducers/profileReducer";
import { ITeam } from "../../store/reducers/teamsReducer";
import { IRootState } from "../../store/store";
import Pagination from "../pagination/Pagination";

import styles from "./games.module.scss"; 

interface ICardTable {
    variable: 'games' | 'profiles' | 'teams';
    arrayData: IGame[] | IProfile[] | ITeam[];
};

const CardTable = ({arrayData, variable}: ICardTable) => {
    const selectedGameTitle = useSelector((state: IRootState) => state.gamesDataStorage.selectedGame);

    if (arrayData.length) {
        return (
            <div className={styles.games}>
                <h1 className={styles.h1}>
                    {variable === 'games' ? 'Игры' : variable === 'profiles' ? 'Игроки' : 'Команды'}
                </h1>
                <div className={styles.container}>
                    { arrayData && arrayData
                        .map((data: any) => <Card 
                                key={data.id}
                                title={variable === 'profiles' ? data.nickname : data.title} 
                                img={variable === 'profiles' ? data.image : data.logo}
                                slug={variable === 'games' ? data.slug : data.id}
                                variable={variable}
                            />)
                    }
                    <Pagination tableType={variable === 'profiles' ? 'players' : variable} game={selectedGameTitle} />
                </div>
            </div>
        );
    } else {
        return (
            <h1 className={styles.noData}>
                {variable === 'games' ? 'Игр' : variable === 'profiles' ? 'Игроков' : 'Команд'} нет
            </h1>
        );
    };
};

export default CardTable;