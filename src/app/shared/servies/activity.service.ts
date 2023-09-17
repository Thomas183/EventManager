import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { Activity } from '../models/activity';
import {BadResponse} from "../models/bad-response";

@Injectable({
  providedIn: 'root'
})
export class activityService {

  url : string = 'https://192.168.0.12:7245/api'
  private _activities : BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>([]);
  activities$ = this._activities.asObservable()
  constructor(private _auth : AuthService, private _httpClient : HttpClient) {

  }

  getActivityById(id : number) : Observable<Activity>{
    return this._httpClient.get<Activity>(`${this.url}/Activity/${id}`)
  }
  getNextActivities() : void {
    this._httpClient.get<Activity[]>(this.url+'/Activity/NextActivities').subscribe(activities => {
      activities.forEach(activity => {
        this._activities.next(activities)
      })
    })
  }

  getActivityDetails(id : number) : Observable<Activity> {
    return this._httpClient.get<Activity>(`${this.url}/Activity/${id}`)
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

  followActivity(id : number): void {
    this._httpClient.post(`${this.url}/Registration/Join/${id}`, {nbGuest : 1}).subscribe({
      next : response => {
        console.log('Activity followed :', response)
      },
      error : error => {
        console.log('Activity follow failed :', error)
      }
    })
  }

  unfollowActivity(id : number): void {
    this._httpClient.post(`${this.url}/Registration/Leave/${id}`, id).subscribe({
      next: response => {
        console.log('Activity left', response);
      },
      error: error => {
        console.log('Activity leave failed', error);
      }
    })
  }

  editActivity(activity : Activity, id : number) : void {
    this._httpClient.put(`${this.url}/Activity/${id}`, activity).subscribe({
      next : response => {
        console.log('Activity Edit successful', response)
      },
      error : error => {
        console.log('Activity Edit failed', error)
      }
    })
  }

  deleteActivity(id : number): Observable<Activity | BadResponse> {
    return this._httpClient.delete<Activity | BadResponse>(`${this.url}/Activity/${id}`)
  }

}
