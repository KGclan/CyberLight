export const homeReducer = (state = {}, action: any) => {
    switch (action.type) {
        case 'SET_GAMES':
            return {
                games: action.payload,
            };
        default: return state;
    }
};