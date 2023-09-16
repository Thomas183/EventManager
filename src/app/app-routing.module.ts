import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {LogOnComponent} from "./features/user/log-on/log-on.component";
import {IncomingEventsComponent} from "./features/events/incoming-events/incoming-events.component";
import {RegisterComponent} from "./features/user/register/register.component";
import {UserEventsComponent} from "./features/events/user-events/user-events.component";
import {CreateEventComponent} from "./features/events/create-event/create-event.component";

const routes: Routes = [
  {
    path: "home", component : HomeComponent
  },
  {
    path: "", redirectTo : 'home', pathMatch: 'full'
  },
  {
    path: "login", component : LogOnComponent
  },
  {
    path: "events", component : IncomingEventsComponent
  },
  {
    path: "user-events", component : UserEventsComponent
  },
  {
    path: "register", component : RegisterComponent
  },
  {
    path: "createEvent", component : CreateEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
