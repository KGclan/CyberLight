import React, { FC } from "react";

import NeonButton from "../../buttons/neon/NeonButton";

import styles from "./card.module.scss";

interface ICard {
    variable: 'games' | 'profiles' | 'teams';
    title: string;
    img: string;
    slug: string;
}

const Card: FC<ICard> = ({variable, title, img, slug}) => (
    <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <img 
            src={img}
            alt='Картинка'
            className={styles.image}
        />
        <NeonButton
            to={`/${variable.replace('s', '')}/${slug}`}
            color={'default'}
            text={'Подробнее'} 
            width={'200px'}
            height={'35px'}
            gameTitle={title}
        />
    </div>
)

export default Card;