import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderInfo from "../../components/header/info/HeaderInfo";
import Opportunities from "../../components/opportunities/Opportunities";
import { IRootState } from "../../store/store";
import CardTable from "../../components/cardTable/CardTable";

const Home: FC = () => {
    const dispatch = useDispatch();
    const games = useSelector((state: IRootState) => state.gamesDataStorage.games);

    useEffect(() => {
        dispatch({type: 'LOAD_GAMES', payload: {offset: 0}});
    }, []);

    return(
        <div className="Home">
            <HeaderInfo />
            <Opportunities />
            <CardTable
                variable="games"
                arrayData={games}
            />
        </div>
    )
}

export default Home;