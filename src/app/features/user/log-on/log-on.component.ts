import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.sass']
})
export class LogOnComponent {
  constructor(public _router : Router, private route: ActivatedRoute) {
  }
}
