import { Injectable } from '@angular/core';
import { spotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs

  constructor() { }

  getUrlLogin() {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectionUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;
    const resposeType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectionUrl + scopes + resposeType;
  }

  getToken() {
    // console.log(window.location.hash)
    if (!window.location.hash)
      return ''

    const params = window.location.hash.substring(1).split('&')

    return (params[0].split('=')[1])
  }

  accessToken(token: string) {
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
  }
}
