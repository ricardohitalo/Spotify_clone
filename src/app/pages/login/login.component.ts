import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getToken()
  }

  checkToken() {
    const token = this.spotifyService.getToken()
    if (!!token) {
      this.spotifyService.accessToken(token)
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getUrlLogin()
  }

}
