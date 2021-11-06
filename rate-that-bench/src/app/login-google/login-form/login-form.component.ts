import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  logIn() {
    this.authService.loginWithRedirect({
      redirect_uri: 'http://localhost:4200',
    });
  }
}
