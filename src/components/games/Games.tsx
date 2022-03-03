import React from "react";
import { useSelector } from "react-redux";

import GameCard from "../../modules/UI/card/games/GameCard";

import styles from "./games.module.scss";

const Games = () => {
    const games = useSelector((state: any) => state.home.games);

    return(
        <div className={styles.games}>
            <h1 className={styles.h1}>Игры</h1>
            <div className={styles.container}>
                { games && games
                    .map((game: any) => <GameCard 
                            key={game.id}
                            gameName={game.title} 
                            img={game.image}
                        />)
                }
            </div>
        </div>
    )
}

export default Games;