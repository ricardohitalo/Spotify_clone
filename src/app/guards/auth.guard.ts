import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('')
    console.log(token)

    if (!token) {
      return this.notAuthenticated()
    }

    return true;
    // return new Promise(res => {
    //   setTimeout(() => {
    //     res(true)
    //   }, 3000)
    // });
  }
  notAuthenticated() {
    localStorage.clear()
    this.router.navigate(['login'])
    return false
  }
}
