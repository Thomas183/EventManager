import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsComponent } from './user-events/user-events.component';
import { IncomingEventsComponent } from './incoming-events/incoming-events.component';



@NgModule({
  declarations: [
    UserEventsComponent,
    IncomingEventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
