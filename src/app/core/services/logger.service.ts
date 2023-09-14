import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FullUser} from '../../shared/models/full-user';
import {Observable} from "rxjs";
import {RegisterReponse} from "../models/register-reponse";
import {Credentials} from "../models/credentials";
import {LoginSuccessfulResponse} from "../models/login-successful-response";
import {LoginBadResponse} from "../models/login-bad-response";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private _httpClient: HttpClient) {

  }

  public token: string | undefined;
  apiUrl: string = 'https://192.168.0.12:7245/api';

  register(user: FullUser): Observable<null | RegisterReponse> {
    return this._httpClient.post<null | RegisterReponse>(`${this.apiUrl}/Auth/Register`, user);
  }

  logon(user: Credentials): void {
    this._httpClient.post<LoginSuccessfulResponse | LoginBadResponse>(`${this.apiUrl}/Auth/Login`, user).subscribe({
      next: response => {
        console.log('Login Successful : ', response);
      },
      error: error => {
        console.log('Login Failed : ', error);
      }
    })
  }
}
