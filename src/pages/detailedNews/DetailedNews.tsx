import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IRootState } from '../../store/store';

import styles from './detailedNews.module.scss';

const DetailedNews = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const [detailedNews] = useSelector((state: IRootState) => state.newsDataStorage.news);

    useEffect(() => {
        dispatch({type: 'LOAD_DETAILED_NEWS', payload: {id}});
    }, []);

    if (detailedNews) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.newsWrapper}>
                    <h1>{detailedNews.title}</h1>
                    <img src={detailedNews.image} alt='Картинка' />
                    <p>{detailedNews.body}</p>
                    <div>
                        <Link to='/news/'>Назад</Link>
                        <p>{detailedNews.date}</p>
                    </div>
                </div>
            </div>
        )
    } else return <p>GG</p>;
};

export default DetailedNews;

