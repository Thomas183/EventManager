import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'https://localhost:7245/api'
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
}
