import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsComponent } from './user-events/user-events.component';
import { IncomingEventsComponent } from './incoming-events/incoming-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ButtonModule } from 'primeng/button';
import { CreateEventComponent } from './create-event/create-event.component';
import {CardModule} from "primeng/card";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UserEventsComponent,
    IncomingEventsComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    ChipsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventsModule { }
