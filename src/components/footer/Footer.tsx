import React, {FC} from "react";

import styles from "./footer.module.scss";

const Footer: FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.social}>
                    <div className={styles.social__logo}>CYBER LIGHT</div>
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
                        Идеальная возможность осуществить свой путь в киберспорте.
                    </p>
                    <p className={styles.info__text}>
                        Этот сайт служит для предоставления общей информации о компании CYBER LIGHT. 
                        Сайт не используется в рекламных или маркетинговых целях. 
                        Материалы на сайте не являются предложениями 
                        о продаже или покупке какого-либо продукта компании CYBER LIGHT!
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