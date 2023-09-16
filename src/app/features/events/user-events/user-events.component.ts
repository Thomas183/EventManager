import {Component} from '@angular/core';
import {Activity} from "../../../shared/models/activity";
import {ApiService} from "../../../shared/servies/api.service";

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.sass']
})
export class UserEventsComponent {

  userActivities : Activity[] = []

  constructor(private _api : ApiService) {
    _api.getUserActivities().subscribe( {
      next : activities => {
        this.userActivities = activities as Activity[]
      },
      error : response => {
        console.log(response);
      }
    })
  }

}
