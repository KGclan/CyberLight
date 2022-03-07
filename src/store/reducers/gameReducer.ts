export interface IGame {
    id: number;
    title: string;
    description: string;
    logo: string;
};

export const gameReducer = (state: IGame[] = [], action: any) => {
    switch (action.type) {
        case 'SET_GAMES':
            return [...action.payload];
        default: return state;
    }
};