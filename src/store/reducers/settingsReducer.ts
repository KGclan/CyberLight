export interface ISettings {
    league: 'Основная лига' | 'Детская лига';
};

const initialState: ISettings = {
    league: 'Основная лига',
};

export const settingsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_LEAGUE':
            return {
                ...state,
                league: action.payload.league,
            };
        default: return state;
    }
};