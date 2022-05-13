import React from "react";

import OpportunitiesCard from "../../modules/UI/card/opportunities/OpportunitiesCard";

import styles from "./opportunities.module.scss";

const Opportunities = () => {
    return(
        <div className={styles.opportunities}>
            <h1 className={styles.h1}>Возможности</h1>
            <div className={styles.container}>
                <OpportunitiesCard
                    title={'Сборная РИНХа'}
                    text={`Лучшая команда станет представлять РИНХ и учавствовать в международном турнире!`} 
                />
                <OpportunitiesCard
                    big={true}
                    title={'Команды'}
                    text={`Возможность вступить в команду  или найти игроков под каждую позициюю`}
                />
                <OpportunitiesCard
                    title={'Кибер клуб'}
                    text={`Играй на самых мощных компьютерах в кибер клубе РИНХА.`}
                />
            </div>
        </div>
    )
}

export default Opportunities;