import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  isLogged: boolean = false;
  constructor(private apiService: ApiService) { }

  login(login: { login: string, password: string }): Promise<boolean> {
    return new Promise((resolver, reject) => {
      if (login.login === 'admin' && login.password === 'adminadmin') {
        this.isLogged = true;
        resolver(true);
      } else {
        resolver(false);
      }
    });
  }

}
