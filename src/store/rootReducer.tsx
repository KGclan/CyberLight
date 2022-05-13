import { combineReducers } from "redux";

import { gameReducer } from "./reducers/gameReducer";
import { loadersReducer } from "./reducers/loadersReducer";
import { matchReducer } from "./reducers/matchReducer";
import { profileReducer } from "./reducers/profileReducer";
import { settingsReducer } from "./reducers/settingsReducer";
import { teamReducer } from "./reducers/teamsReducer";

const rootReducer = combineReducers({
	gamesDataStorage: gameReducer,
	profilesDataStorage: profileReducer,
	teamsDataStorage: teamReducer,
	matchsDataStorage: matchReducer,
	loaders: loadersReducer,
	settings: settingsReducer,
});

export default rootReducer;