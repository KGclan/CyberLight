import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { IGamesDataStorage } from "./reducers/gameReducer";
import { ILoaders } from "./reducers/loadersReducer";
import { IMatchsDataStorage } from "./reducers/matchReducer";
import { INewsDataStorage } from "./reducers/newsReducer";
import { IProfilesDataStorage } from "./reducers/profileReducer";
import { ISettings } from "./reducers/settingsReducer";
import { ITeamsDataStorage } from "./reducers/teamsReducer";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export interface IRootState {
    gamesDataStorage: IGamesDataStorage;
    profilesDataStorage: IProfilesDataStorage;
    teamsDataStorage: ITeamsDataStorage;
    matchsDataStorage: IMatchsDataStorage;
    newsDataStorage: INewsDataStorage;
    loaders: ILoaders;
    settings: ISettings;
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),
);

sagaMiddleware.run(rootSaga);

export default store;

