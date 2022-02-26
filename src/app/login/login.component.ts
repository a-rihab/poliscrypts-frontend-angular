import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { TokenStorageService } from '../service/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn = false;
  public username = '';
  public password = '';


  constructor(private authenticateService: AuthenticateService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  onSubmit(): void {
    this.authenticateService.login(this.username, this.password).subscribe(
      data => {
        this.tokenStorage.saveLoginResponse(data);
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.isLoggedIn = false;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
