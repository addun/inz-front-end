import {Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {StorageService} from '../../storage/storage.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenKey = 'login_token';

  constructor(private apiService: ApiService, private storageService: StorageService) {
  }

  signIn(data: LoginForm): Promise<any> {
    const token = this.generateToken(data);
    return this.verifyToken(token);
  }

  isLogin(): Promise<boolean> {
    return this.verifyToken(this.getAuthTokenFromMemory());
  }

  logout(): Promise<void> {
    return new Promise((resolve) => {
      this.removeAuthToken();
      resolve();
    });
  }

  getAuthorizationHeaderKey(): string {
    return 'Authorization';
  }

  getAuthTokenFromMemory() {
    const token = this.storageService.get(this.authTokenKey);
    return token ? token : '';
  }

  private verifyToken(token: string): Promise<any> {
    return new Promise<any>((resolve) => {
      this.apiService.get('auth/', {
        headers: new HttpHeaders().append(this.getAuthorizationHeaderKey(), token)
      }).toPromise()
        .then(() => {
          this.saveAuthTokenToMemory(token);
          resolve(true);
        }, () => {
          this.removeAuthToken();
          resolve(false);
        }).catch(() => {
        resolve(false);
      })
      ;
    });

  }

  private generateToken(data: LoginForm): string {
    return `Basic ${btoa(data.login + ':' + data.password)}`;
  }

  private removeAuthToken() {
    this.storageService.remove(this.authTokenKey);
  }

  private saveAuthTokenToMemory(token: string) {
    this.storageService.save(this.authTokenKey, token);
  }
}

interface LoginForm {
  login: string;
  password: string;
}
