import axios from "axios";

export const getGamesRequest = async(offset: number = 0) => {
    const request = await axios.get(`http://127.0.0.1:8000/games/?offset=${offset}&limit=9`);
    const response = await request.data;

    return response;
};

export const getProfilesRequest = async(
    offset: number = 0,
    gameName: string,
    league: string = 'Основная лига',
    team: string = '',
) => {
    const request = await axios.get(
        `http://127.0.0.1:8000/profiles/?&offset=${offset}&limit=9&game=${gameName || ''}&league=${league}&team=${team}`
    );
    const response = await request.data;

    return response;
};

export const getProfileRequest = async(id: number) => {
    const request = await axios.get(
        `http://127.0.0.1:8000/profiles/${id}`
    );
    const response = await request.data;

    return response;
};

export const getTeamsRequest = async(
    league: string = 'Основная лига',
    gameName: string,
    offset: number = 0,
    limit: number = 9,
) => {
    const request = await axios.get(
        `http://127.0.0.1:8000/teams/?league=${league}&games=${gameName}&offset=${offset}&limit=${limit}`
    );
    const response = await request.data;

    return response;
};

export const getTeamRequest = async(id: number) => {
    const request = await axios.get(
        `http://127.0.0.1:8000/teams/${id}`
    );
    const response = await request.data;

    return response;
};

export const getMatchsRequest = async(
    gameName: string,
    offset: number = 0,
    limit: number = 10,
    league: string = 'Основная лига',
) => {
    const request = await axios.get(
        `http://127.0.0.1:8000/matchs/?game=${gameName}&league=${league}&offset=${offset}&limit=${limit}`
    );
    const response = await request.data;

    return response;
};

export const getNewsRequest = async(offset: number = 0) => {
    const request = await axios.get(`http://127.0.0.1:8000/news/?offset=${offset}&limit=5`);
    const response = await request.data;

    return response;
};

export const getDetailedNewsRequest = async(id: number) => {
    const request = await axios.get(`http://127.0.0.1:8000/news/${id}`);
    const response = await request.data;

    return response;
};

export const userAuth = async (username: string, password: string) => {
    const request = await axios.post('http://127.0.0.1:8000/auth/token/login', {password, username});

    const response = await request.data;

    return response;
};

export const logout = async () => {
    const token = localStorage.getItem('token');
    
    const response = await axios.post('http://127.0.0.1:8000/auth/token/logout', {}, {headers: {Authorization: `Token ${token}`}});

    return response;
};

export const registration = async (username: string, password: string) => {
    const request = await axios.post('http://127.0.0.1:8000/auth/users/', {username, password})

    const response = await request.data;

    return response;
}
