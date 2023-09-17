import {Component} from '@angular/core';
import {ApiService} from '../../../shared/servies/api.service';
import {Activity} from '../../../shared/models/activity';
import {formatDate} from "@angular/common";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-incoming-events',
  templateUrl: './incoming-events.component.html',
  styleUrls: ['./incoming-events.component.sass']
})
export class IncomingEventsComponent {

  activities: Activity[] = []
  isLoggedIn: boolean = this._auth.isUserLoggedin()

  constructor(private _api: ApiService, private _auth: AuthService) {
    _api.getNextActivities();
    _api.activities$.subscribe(activities => {
      this.activities = activities;
    });
  }

  getEventDetails(activityId : boolean) {

  }

}
