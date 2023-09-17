import {Component} from '@angular/core';
import {activityService} from '../../../shared/servies/activity.service';
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
  isLoggedIn: boolean = false

  constructor(private _api: activityService, private _auth: AuthService) {
    _api.getNextActivities();
    _api.activities$.subscribe(activities => {
      this.activities = activities;
      this.activities.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    });

    this._auth.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }

  followActivity(id : number) : void {
    this._api.followActivity(id)
  }

}
