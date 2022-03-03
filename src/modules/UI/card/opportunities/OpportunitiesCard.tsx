import React, {FC} from "react";
import cn from "classnames";

import styles from "./card.module.scss";

interface IOpportunitiesCard {
    title: string;
    text: string;
    big?: boolean;
}

const OpportunitiesCard: FC<IOpportunitiesCard> = ({title, text, big}) => {
    return(
        <div 
            className={cn(styles.card,
                {[styles.card__bigCard]: big === true})}
        >
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default OpportunitiesCard;
