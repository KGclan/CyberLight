export interface ISettings {
    league: 'Основная лига' | 'Детская лига';
    auth: boolean;
    user: string;
};

const initialState: ISettings = {
    league: 'Основная лига',
    auth: !!localStorage.getItem('token'),
    user: '',
};

export const settingsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_LEAGUE':
            return {
                ...state,
                league: action.payload.league,
            };
        case 'SET_AUTH':
            return {
                ...state,
                auth: action.payload.auth,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user,
            };
        default: return state;
    }
};