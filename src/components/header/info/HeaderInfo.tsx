import React from "react";
import NeonButton from "../../../modules/UI/buttons/neon/NeonButton";

import styles from "./header_info.module.scss";

const HeaderInfo = () => {
    return(
        <div className={styles.headerInfo}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.info__title}>
                    <span style={{color: '#5F0061'}}>CYBER LIGHT </span>
                     — начни свой киберспортивный путь здесь
                    </h1>
                    <p className={styles.info__text}>
                        Дадим толчок к развитию вашей киберспортивной карьере<br/>
                        <span style={{color: '#5F0061'}}> CYBER LIGHT</span>
                    </p>
                    <NeonButton
                        to={''}
                        color={'default'}
                        text={'Подробнее'}
                        width={'250px'}
                        height={'50px'}
                    />
                </div>
                <div className={styles.logo}>
                    <p className={styles.logo__title}>
                        <span style={{color: '#5F0061'}}>C</span>yber 
                        <span style={{color: '#5F0061'}}> L</span>ight
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo;