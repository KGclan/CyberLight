import React, { FC } from "react";
import NeonButton from "../../buttons/neon/NeonButton";

import styles from "./card.module.scss";

interface IGameCard {
    gameName: string;
    img: string;
}

const GameCard: FC<IGameCard> = ({gameName, img}) => {
    return(
        <div className={styles.gameCard}>
            <p className={styles.gameName}>{gameName}</p>
            <img 
                src={img}
                alt='Картинка'
                className={styles.gameImage}
            />
            <NeonButton
                color={'default'}
                text={'Подробнее'} 
                width={'200px'}
                height={'35px'}
            />
        </div>
    )
}

export default GameCard;