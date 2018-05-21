import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  save(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

}
