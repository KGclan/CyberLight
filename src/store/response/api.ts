export const getGamesRequest = async() => {
    const request = await fetch('http://127.0.0.1:8000/games/');

    const data = await request.json();

    return data;
};

