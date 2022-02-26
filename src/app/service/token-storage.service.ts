import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveLoginResponse(loginResponse: any): void {
    window.sessionStorage.setItem('accessToken', loginResponse.accessToken);
    window.sessionStorage.setItem('refreshToken', loginResponse.refreshToken);
    window.sessionStorage.setItem('username', loginResponse.username);
    window.sessionStorage.setItem('roles', loginResponse.roles);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem('accessToken');
  }
  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem('refreshToken');
  }
  public getUsername(): string | null {
    return window.sessionStorage.getItem('username');
  }
  public getRoles(): string | null {
    return window.sessionStorage.getItem('roles');
  }
}
