export interface IProfile {
    id: number;
    nickname: string;
    image: string;
    about_me: string;
    user: number;
    game: {title: string};
    rating: string;
    league: {league: string};
    win: number;
    lose: number;
    age: number;
    phone: string;
    email: string;
    vk: string;
    status: any;
    team: string[];
};

export interface IProfilesDataStorage {
    profiles: IProfile[];
    totalCount: number;
};

const initialState: IProfilesDataStorage = {
    profiles: [],
    totalCount: 0,
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PROFILES':
            return {
                ...state,
                profiles: [...action.payload.profiles],
                totalCount: action.payload.totalCount,
            };
        case 'SET_PROFILE': 
            return {
                profiles: [action.payload.profiles],
                totalCount: action.payload.totalCount,
            };
        default: return state;
    }
};