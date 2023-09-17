import {Component} from '@angular/core';
import {Activity} from "../../../shared/models/activity";
import {activityService} from "../../../shared/servies/activity.service";

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.sass']
})
export class UserEventsComponent {

  userActivities : Activity[] = []

  constructor(private _api : activityService) {
    _api.getUserActivities().subscribe( {
      next : activities => {
        console.log(activities)
        this.userActivities = activities as Activity[]
        this.userActivities.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      },
      error : response => {
        console.log(response);
      }
    })
  }

  unfollowActivity(id: number): void {
    this._api.unfollowActivity(id)
  }

}
