import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRegistrationEntity } from '../entity/UserRegistrationEntity';
import { UserLoginEntity } from '../entity/UserLoginEntity';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  public register(user: UserRegistrationEntity) {
    return this.http.post(`${environment.server}/api/users/register`, user);
  }
  public login(user: UserLoginEntity) {
    return this.http.post(`${environment.server}/api/users/login`, user);
  }
  public logout() {

    return this.http.post(`${environment.server}/api/users/logout`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
  public loggedIn() {
    return !!localStorage.getItem('token');
  }
}
