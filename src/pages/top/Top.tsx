import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardTable from "../../components/cardTable/CardTable";
import GameInfo from "../../components/gameInfo/GameInfo";
import HeaderInfo from "../../components/header/info/HeaderInfo";
import LeagueSelector from "../../components/leagueSelector/LeagueSelector";
import MatchsTable from "../../components/matchsTable/MatchsTable";
import Opportunities from "../../components/opportunities/Opportunities";
import Table from "../../modules/UI/table/Table";
import { IGame } from "../../store/reducers/gameReducer";
import { IRootState } from "../../store/store";

const Top = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const games = useSelector((state: IRootState) => state.gamesDataStorage.games);
    const selectedGameTitle = useSelector((state: IRootState) => state.gamesDataStorage.selectedGame);
    const [selectedGame] = games.filter((item: IGame) => item.slug === params.slug);
    const profiles = useSelector((state: IRootState) =>
        state.profilesDataStorage.profiles.filter((item) => item.game.title === (selectedGame && selectedGame.title)));
    const teams = useSelector((state: IRootState) => state.teamsDataStorage.teams);
    const gameLoader = useSelector((state: IRootState) => state.loaders.gameLoader);
    const matchs = useSelector((state: IRootState) => state.matchsDataStorage?.matchs);

    useEffect(() => {
        dispatch({type: 'SET_SELECTED_GAME', payload: selectedGame?.title});
    }, [selectedGame]);

    useEffect(() => {
        dispatch({type: 'LOAD_GAMES', payload: {offset: 0}});
        dispatch({type: 'LOAD_TEAMS', payload: {title: selectedGameTitle}});
        dispatch({type: 'LOAD_PROFILES', payload: {title: selectedGameTitle}});
        if (selectedGameTitle !== '') dispatch({type: 'LOAD_MATCHS', payload: {title: selectedGameTitle}});
    }, [selectedGameTitle]);

    return(
        <div className="Top">
            <LeagueSelector />
            <HeaderInfo />
            <Opportunities />
            {!gameLoader && selectedGame && <GameInfo game={selectedGame}/>}
            <MatchsTable matchs={matchs} />
            <Table
                isTeamsTable={true}
                tableData={teams}
            />
            <CardTable
                variable='teams'
                arrayData={teams}
            />
            <Table
                isTeamsTable={false}
                tableData={profiles}
            />
            <CardTable
                variable='profiles'
                arrayData={profiles}
            />
        </div>
    )
}

export default Top;
