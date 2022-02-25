import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { TokenStorageService } from '../service/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';


  constructor(private authenticateService: AuthenticateService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loginValid = true;
    }
  }
  onSubmit(): void {
    this.authenticateService.login(this.username, this.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.loginValid = true;
        this.reloadPage();
      },
      err => {
        this.loginValid = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
