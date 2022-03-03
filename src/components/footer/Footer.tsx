import React, {FC} from "react";

import styles from "./footer.module.scss";

const Footer: FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.social}>
                    <div className={styles.social__logo}>HQD</div>
                    <div className={styles.social__icons}>
                        <a href='https://www.instagram.com/'>
                            <img className={styles.social__icons__item} src="icons/social/instagram.svg" alt="Инстаграм" />
                        </a>
                        <a href='https://www.youtube.com/'>
                            <img className={styles.social__icons__item} src="icons/social/youtube.svg" alt="Ютуб" />
                        </a>
                        <a href='https://vk.com/'>
                        <img className={styles.social__icons__item} src="icons/social/vk.svg" alt="Вконтакте" />
                        </a>
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.info__title}>
                        Идеальное решение для потребителей никотина, 
                        реальная альтернатива обычным сигаретам.
                    </p>
                    <p className={styles.info__text}>
                        Этот сайт служит для предоставления общей информации о компании HQD. 
                        Сайт не используется в рекламных или маркетинговых целях. 
                        Материалы на сайте не являются предложениями 
                        о продаже или покупке какого-либо продукта компании HQD!
                    </p>
                </div>
                <div className={styles.contacts}>
                    <p className={styles.info__title}>Контакты</p>
                    <p className={styles.info__text}>8 (495) 846-66-70 оптовый отдел info@hqdpods.ru</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;