import { combineReducers } from "redux";

import { gameReducer } from "./reducers/gameReducer";
import { loadersReducer } from "./reducers/loadersReducer";
import { matchReducer } from "./reducers/matchReducer";
import { newsReducer } from "./reducers/newsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { settingsReducer } from "./reducers/settingsReducer";
import { teamReducer } from "./reducers/teamsReducer";

const rootReducer = combineReducers({
	gamesDataStorage: gameReducer,
	profilesDataStorage: profileReducer,
	teamsDataStorage: teamReducer,
	matchsDataStorage: matchReducer,
	newsDataStorage: newsReducer,
	loaders: loadersReducer,
	settings: settingsReducer,
});

export default rootReducer;