import React from "react";
import { useSelector } from "react-redux";

import GameCard from "../../modules/UI/card/games/GameCard";
import { IGame } from "../../store/reducers/gameReducer";

import styles from "./games.module.scss";

const Games = () => {
    const games = useSelector((state: any) => state.games);

    return(
        <div className={styles.games}>
            <h1 className={styles.h1}>Игры</h1>
            <div className={styles.container}>
                { games && games
                    .map((game: IGame) => <GameCard 
                            key={game.id}
                            gameName={game.title} 
                            img={game.logo}
                        />)
                }
            </div>
        </div>
    )
}

export default Games;