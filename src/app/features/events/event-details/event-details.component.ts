import { Component } from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.sass']
})
export class EventDetailsComponent {

  activityId : number = 0
  constructor(route : ActivatedRoute) {
    route.paramMap.pipe().subscribe(params => {

    })
  }
}
