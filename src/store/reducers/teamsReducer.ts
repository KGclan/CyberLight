export interface ITeam {
    id: number;
    title: string;
    description: string;
    logo: string;
    players: {nickname: string}[];
    games: {title: string}[];
    captain: {nickname: string};
    win: number;
    lose: number;
    league: {league: string}[]
};

export interface ITeamsDataStorage {
    teams: ITeam[];
    totalCount: number;
};

const initialState: ITeamsDataStorage = {
    teams: [],
    totalCount: 0,
}

export const teamReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_TEAMS':
            return {
                teams: [...action.payload.teams],
                totalCount: action.payload.totalCount,
            };
        case 'SET_TEAM':
            return {
                teams: [action.payload.teams],
                totalCount: action.payload.totalCount,
            };
        default: return state;
    }
};