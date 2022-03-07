export interface IProfile {
    id: number;
    nickname: string;
    image: string;
    aboutMe: string;
    user: number;
    game: number;
};

export const profileReducer = (state: IProfile[] = [], action: any) => {
    switch (action.type) {
        case 'SET_PROFILES':
            return [...action.payload];
        default: return state;
    }
};