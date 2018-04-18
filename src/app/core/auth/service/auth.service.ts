import {Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AuthService {

  isLogged = false;

  constructor(private apiService: ApiService) {
  }

  login(login: { login: string, password: string }): Promise<boolean> {
    return new Promise((resolver, reject) => {
      if (login.login === environment.auth.login && login.password === environment.auth.password) {
        this.isLogged = true;
        resolver(true);
      } else {
        resolver(false);
      }
    });
  }

}
