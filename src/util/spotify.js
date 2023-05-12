const clientId = ''; // Client ID goes here.
const redirect_uri = 'http://localhost:3000/';
const response_type = 'token';
const scope = 'playlist-modify-public'
let accessToken;
const apiUrl = 'https://api.spotify.com/v1/'

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        const accessTokenNow = window.location.href.match(/access_token=([^&]*)/);
        const expiresInNow = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenNow && expiresInNow) {
            accessToken = accessTokenNow[1];
            const expiresIn = Number(expiresInNow[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            // Clear parameters to get new access token when expired
            window.history.pushState('Access Token', null, '/');
            return accessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${response_type}&scope=${scope}&redirect_uri=${redirect_uri}`;
            window.location = accessUrl
        }
    },

    search (term) {
        const token = Spotify.getAccessToken();
        return fetch(`${apiUrl}search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => response.json()
        ).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [{
                    id: 0,
                    name: 'none',
                    artist: 'none',
                    album: 'none',
                    uri: 'none'
                }];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const token = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${token}`};
        let userId;

        return fetch(`${apiUrl}me`, {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`${apiUrl}users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playListId = jsonResponse.id;
                return fetch(`${apiUrl}users/${userId}/playlists/${playListId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUris})
                });
            });
        });
    }
};

export default Spotify;
