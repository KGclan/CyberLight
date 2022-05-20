import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import News from '../../components/news/News';
import Pagination from '../../components/pagination/Pagination';
import { INews } from '../../store/reducers/newsReducer';
import { IRootState } from '../../store/store';

import styles from './newsList.module.scss';

const NewsList = () => {
    const dispatch = useDispatch();
    const newsData = useSelector((state: IRootState) => state.newsDataStorage.news);

    useEffect(() => {
        dispatch({type: 'LOAD_NEWS', payload: {offset: 0}});
    }, [])

    return (
        <div className={styles.wrapper}>
            {newsData.map((news: INews) => <News newsData={news} key={news.id}/>)}
            <Pagination tableType={'news'} />
        </div>
    );
};

export default NewsList;