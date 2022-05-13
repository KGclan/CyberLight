export interface IMatchsDataStorage {
    totalCount: number;
    matchs: IMatch[];
};
export interface IMatch {
    id: number;
    date: Date;
    time: Date;
    game: {
        title: string,
        slug: string,
    };
    teams: number[];
    league: {league: string};
};

const initialState: IMatchsDataStorage = {
    totalCount: 0,
    matchs: [],
};


export const matchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_MATCHS':
            return {
                ...state,
                matchs: action.payload.data,
                totalCount: action.payload.count,
            };
        default: return state;
    }
};