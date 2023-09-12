import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FullUser } from '../models/full-user';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private _httpClient: HttpClient) {

  }

  apiUrl: string = 'https://localhost:7245/api';

  register(user: FullUser): void {
    this._httpClient.post(`${this.apiUrl}/Auth/Register`, user).subscribe({
      next: response => {
        console.log('Register Successful : ', response);
      },
      error: error => {
        console.log('Register Failed : ', error);
      }
    });
  }

  logon(
    user : {
      identifier: string,
      password: string, }
  ) : void {
    this._httpClient.post(`${this.apiUrl}/Auth/Login`, user).subscribe({
      next: response => {
        console.log('Login Successful : ', response);
      },
      error: error => {
        console.log('Login Failed : ', error);
      }
    })
  }

}
