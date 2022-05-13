export interface IGamesDataStorage {
    selectedGame: string;
    games: IGame[];
    totalCount: number;
};
export interface IGame {
    id: number;
    slug: string;
    title: string;
    description: string;
    logo: string;
};

const initialState = {
    selectedGame: '',
    games: [],
    totalCount: 0,
};

export const gameReducer = (state: IGamesDataStorage = initialState, action: any) => {
    switch (action.type) {
        case 'SET_GAMES':
            return {
                ...state,
                games: [...action.payload.games],
                totalCount: action.payload.totalCount,
            };
        case 'SET_SELECTED_GAME':
            return {
                ...state,
                selectedGame: action.payload,
            };
        default: return state;
    }
};