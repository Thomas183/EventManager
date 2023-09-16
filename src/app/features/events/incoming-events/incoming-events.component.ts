import { Component } from '@angular/core';
import { ApiService } from '../../../shared/servies/api.service';
import { Activity } from '../../../shared/models/activity';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-incoming-events',
  templateUrl: './incoming-events.component.html',
  styleUrls: ['./incoming-events.component.sass']
})
export class IncomingEventsComponent {

  activities : Activity[] = []
  constructor(private _api: ApiService) {
    _api.getNextActivities();
    _api.activities$.subscribe(activities => {
      this.activities = activities;
    });
  }


  protected readonly formatDate = formatDate;
}
