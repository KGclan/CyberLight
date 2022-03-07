export interface IMatch {
    id: number;
    date: Date;
    time: Date;
    game: number;
    teams: number[];
};

export const matchReducer = (state: IMatch[] = [], action: any) => {
    switch (action.type) {
        case 'SET_MATCHS':
            return [...action.payload];
        default: return state;
    }
};