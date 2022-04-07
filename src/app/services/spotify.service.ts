import { Injectable } from '@angular/core';
import { spotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  getUrlLogin() {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectionUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;
    const resposeType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectionUrl + scopes + resposeType;

  }
}
