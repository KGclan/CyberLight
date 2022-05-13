import React from "react";

import { IGame } from "../../store/reducers/gameReducer";

import styles from "./gameInfo.module.scss";

interface IGameInfo {
    game: IGame;
};

const GameInfo = ({game}: IGameInfo) => {
    return (
        <section className={styles.section}>
            <div className={styles.gameCard}>
                <h1 className={styles.title}>
                    {game.title}
                </h1>
                <div className={styles.info}>
                    <div className={styles.logo}>
                        <img src={game.logo} alt={game.title} />
                    </div>
                    <div className={styles.description}>
                        {game.description}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameInfo;