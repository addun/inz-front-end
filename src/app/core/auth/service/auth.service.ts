import {Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean;
  private loginForm: LoginForm = {
    login: '',
    password: ''
  };

  constructor(private apiService: ApiService) {
    this.isLogged = false;
  }

  login(loginForm: LoginForm): Promise<boolean> {
    this.loginForm = loginForm;
    return new Promise((resolve, reject) => {
      this.apiService.get('auth')
        .subscribe(
          response => {
            this.isLogged = true;
            resolve(true);
          },
          error => {
            resolve(false);
          }
        );

    });
  }

  getAuthorizationHeaderValue(): string {
    return `Basic ${btoa(this.loginForm.login + ':' + this.loginForm.password)}`;
  }

  getAuthorizationHeaderKey(): string {
    return 'Authorization';
  }
}

interface LoginForm {
  login: string;
  password: string;
}
