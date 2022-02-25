import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(tokenResponse: any): void {
    window.sessionStorage.setItem('accessToken', tokenResponse.accessToken);
    window.sessionStorage.setItem('refreshToken', tokenResponse.refreshToken);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem('accessToken');
  }
  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem('refreshToken');
  }
}
