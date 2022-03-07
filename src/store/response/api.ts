export const getGamesRequest = async() => {
    const request = await fetch('http://127.0.0.1:8000/games/');

    const data = await request.json();

    return data;
};

export const getProfilesRequest = async() => {
    const request = await fetch('http://127.0.0.1:8000/profiles/');

    const data = await request.json();

    return data;
}

export const getTeamsRequest = async() => {
    const request = await fetch('http://127.0.0.1:8000/teams/');

    const data = await request.json();

    return data;
}

export const getMatchsRequest = async() => {
    const request = await fetch('http://127.0.0.1:8000/matchs/');

    const data = await request.json();

    return data;
}

