import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {LogOnComponent} from "./features/user/log-on/log-on.component";
import {IncomingEventsComponent} from "./features/events/incoming-events/incoming-events.component";
import {RegisterComponent} from "./features/user/register/register.component";

const routes: Routes = [
  {
    path: "home", component : HomeComponent
  },
  {
    path: "login", component : LogOnComponent
  },
  {
    path: "events", component : IncomingEventsComponent
  },
  {
    path: "register", component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
