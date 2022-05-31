import React from "react";
import { Link } from "react-router-dom";
import { INews } from "../../store/reducers/newsReducer";

import styles from "./news.module.scss";

interface INewsProps {
    newsData: INews,
}

const News = ({newsData}: INewsProps) => (
        <div className={styles.wrapper}>
            <div style={{width: '35%'}}>
                <img style={{width: '100%'}} src={newsData.image} alt="Картинка" />
            </div>
            <div style={{width: '65%'}}>
                <h1>{newsData.title}</h1>
                <p>{`${newsData.body.slice(0, 330)}...`}</p>
                <Link to={`${newsData.id}`}>Читать далее</Link>
            </div>
        </div>
);

export default News;