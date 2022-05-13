export interface ILoaders {
    gameLoader: boolean
};

const initialState: ILoaders = {
    gameLoader: false,
}

export const loadersReducer = (state: ILoaders = initialState, action: any) => {
    switch (action.type) {
        case 'SET_GAMES_LOADER':
            return {...state, gameLoader: action.payload};
        default: return state;
    }
};