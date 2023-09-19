import querystring from "querystring"
import { Buffer } from "buffer";
import samiCooking from '../assets/samiCooking.png'
import { useEffect, useState } from "react";
export default function SpotifyTile(){
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
    const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    const getAccessToken = async() => {
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

        const response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token,
            }),
        });
        //console.log(response);
        return response.json();
    };

    const getNowPlaying = async (client_id, client_secret, refresh_token) => {
        const {access_token} = await getAccessToken(
            client_id,
            client_secret,
            refresh_token
        );
        return fetch(NOW_PLAYING_ENDPOINT, {
            headers:{
                Authorization: `Bearer ${access_token}`,
            },
        });
    };

    const getNowPlayingItem = async (client_id, client_secret, refresh_token) => {
        const response = await getNowPlaying(client_id, client_secret, refresh_token);
        if (response.status === 204 || response.status > 400){
            return false;
        }
        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url
        const artists = song.item.artists.map((_artists) => _artists.name).join(",");
        const isPlaying = song.is_playing;
        const title = song.item.name;
        return{
            albumImageUrl,
            artists,
            isPlaying,
            title,
        };
    };

    const assignData = () => {
        Promise.all([
            getNowPlayingItem(
                client_id,
                client_secret,
                refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
            setLoading(false);
        })
    }

    useEffect(() => {
    })
    return(
        <div className="flex justify-center px-[42px] py-[42px] h-full w-full items-center">
                  <img src={samiCooking} className="w-[200px]" alt="Sami Cooking"></img>
        </div>
    );
}