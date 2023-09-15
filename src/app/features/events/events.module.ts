import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsComponent } from './user-events/user-events.component';
import { IncomingEventsComponent } from './incoming-events/incoming-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    UserEventsComponent,
    IncomingEventsComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class EventsModule { }
