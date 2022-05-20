export const getGamesRequest = async(offset: number = 0) => {
    const request = await fetch(`http://127.0.0.1:8000/games/?offset=${offset}&limit=9`);
    const responseData = await request.json();

    return responseData;
};

export const getProfilesRequest = async(
    offset: number = 0,
    gameName: string,
    league: string = 'Основная лига',
    team: string = '',
) => {
    const request = await fetch(
        `http://127.0.0.1:8000/profiles/?&offset=${offset}&limit=9&game=${gameName || ''}&league=${league}&team=${team}`
    );
    const responseData = await request.json();

    return responseData;
};

export const getProfileRequest = async(id: number) => {
    const request = await fetch(
        `http://127.0.0.1:8000/profiles/${id}`
    );
    const responseData = await request.json();

    return responseData;
};

export const getTeamsRequest = async(
    league: string = 'Основная лига',
    gameName: string,
    offset: number = 0,
    limit: number = 9,
) => {
    const request = await fetch(
        `http://127.0.0.1:8000/teams/?league=${league}&games=${gameName}&offset=${offset}&limit=${limit}`
    );
    const responseData = await request.json();

    return responseData;
};

export const getTeamRequest = async(id: number) => {
    const request = await fetch(
        `http://127.0.0.1:8000/teams/${id}`
    );
    const responseData = await request.json();

    return responseData;
};

export const getMatchsRequest = async(
    gameName: string,
    offset: number = 0,
    limit: number = 10,
    league: string = 'Основная лига',
) => {
    const request = await fetch(
        `http://127.0.0.1:8000/matchs/?game=${gameName}&league=${league}&offset=${offset}&limit=${limit}`
    );
    const responseData = await request.json();

    return responseData;
};

export const getNewsRequest = async(offset: number = 0,) => {
    const request = await fetch(`http://127.0.0.1:8000/news/?offset=${offset}&limit=5`);
    const responseData = await request.json();

    return responseData;
};

