import React from "react";

import OpportunitiesCard from "../../modules/UI/card/opportunities/OpportunitiesCard";

import styles from "./opportunities.module.scss";

const Opportunities = () => {
    return(
        <div className={styles.opportunities}>
            <h1 className={styles.h1}>Возможности</h1>
            <div className={styles.container}>
                <OpportunitiesCard title={'Меньше вреда'} text={`Из-за отсутствия
                    побочных продуктов
                    горения, наша продукция наносит гораздо меньший вред вашему здоровью!`} 
                />
                <OpportunitiesCard big={true} title={'Продуманно'} text={`Идеально подобранная крепость жидкости
                    на правильном солевом никотине вкупе
                    с правильной мощностью дает лучший потребительский опыт.`}
                />
                <OpportunitiesCard title={'Удобно'} text={`Забудьте о зарядных устройствах, флаконе
                    с жидкостью, сгоревшей
                    вате, испарителях
                    и кнопках.`}
                />
            </div>
        </div>
    )
}

export default Opportunities;