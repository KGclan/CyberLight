export interface ITeam {
    id: number;
    title: string;
    description: string;
    logo: string;
    players: number[];
    games: number[];
}

export const teamReducer = (state: ITeam[] = [], action: any) => {
    switch (action.type) {
        case 'SET_TEAMS':
            return [...action.payload];
        default: return state;
    }
};