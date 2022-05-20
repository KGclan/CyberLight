export interface INewsDataStorage {
    totalCount: number;
    news: INews[];
};

export interface INews {
    id: number;
    title: string;
    body: string;
    image: string;
};

const initialState: INewsDataStorage = {
    totalCount: 0,
    news: [],
};


export const newsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: [...action.payload.data],
                totalCount: action.payload.count,
            };
        default: return state;
    }
};