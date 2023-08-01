// login.component.ts
import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // event.preventDefault();

    // if (this.username === 'admin' && this.password === '123') {
    this.router.navigate(['/home']);
  }
}
