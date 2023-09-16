import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { Activity } from '../models/activity';
import {BadResponse} from "../models/bad-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'https://192.168.0.12:7245/api'
  constructor(private _auth : AuthService, private _httpClient : HttpClient) {

  }

  private _activities : BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>([]);
  activities$ = this._activities.asObservable()
  getNextActivities() : void {
    this._httpClient.get<Activity[]>(this.url+'/Activity/NextActivities').subscribe(activities => {
      activities.forEach(activity => {
        this._activities.next(activities)
      })
    })
  }

  getUserActivities(): Observable<Activity[] | BadResponse> {
    return this._httpClient.get<Activity[] | BadResponse>(this.url+'/Activity/MyActivities')
  }

  createActivity(activity : Activity): void {
    this._httpClient.post<null | BadResponse>(this.url+'/Activity', activity).subscribe({
      next : response  => {
        console.log('Activity sent to api', response)
      },
      error : error => {
        console.log('Activity creation failed', error)
      }
    })
  }

}
