import React from "react";
import { IMatch } from "../../store/reducers/matchReducer";
import Pagination from "../pagination/Pagination";

import styles from "./matchsTable.module.scss";

interface IMatchsTable {
    matchs?: IMatch[];
};

const MatchsTable = ({matchs}: IMatchsTable) => {
    if (matchs && matchs.length > 0) {
        const selectedGameTitle = matchs[1]?.game.title;

        return (
            <section className={styles.matchsTable}>
                <h1>Расписание матчей</h1>
                <div style={{width: '50%'}}>
                    {matchs.map((item: IMatch) => (
                        <div key={item.id}>
                            <div className={styles.infoHeader}>
                                <p className="date">{`Дата: ${item.date} Время: ${item.time}`}</p>
                                <p className="league">{item.league.league}</p>
                            </div>
                            <div className={styles.infoBody}>
                                <div className={styles.team}>
                                    <p>{item.teams[0]}</p>
                                    <p>vs</p>
                                    <p>{item.teams[1]}</p>
                                </div>
                                <a href='https://youtu.be/wZi7ZkcOus8'>Смотреть</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.pagination}>
                <Pagination tableType="matchs" game={selectedGameTitle} />
                </div>
            </section>
        );
    } else return <h1 className={styles.noData}>Матчей нет</h1>; // Доработать!
};

export default MatchsTable;