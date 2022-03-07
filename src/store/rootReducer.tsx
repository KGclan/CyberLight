import { combineReducers } from "redux";

import { gameReducer } from "./reducers/gameReducer";
import { matchReducer } from "./reducers/matchReducer";
import { profileReducer } from "./reducers/profileReducer";
import { teamReducer } from "./reducers/teamsReducer";

const rootReducer = combineReducers({
	games: gameReducer,
	profiles: profileReducer,
	teams: teamReducer,
	matchs: matchReducer,
});

export default rootReducer;