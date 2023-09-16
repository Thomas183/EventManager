import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../shared/servies/api.service";
import {Activity} from "../../../shared/models/activity";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.sass']
})
export class CreateEventComponent {

  date: Date = new Date()
  dateSelected : boolean = false;
  createEventForm: FormGroup

  private _dateRange: Date[] = []

  constructor(private _api : ApiService, _fb: FormBuilder) {
    this.createEventForm = _fb.group({
      name: [null, [Validators.required, Validators.maxLength(100)], []],
      description: [null, [Validators.required, Validators.maxLength(500)], []],
      startDate: [null, [Validators.required], []],
      endDate: [null, [Validators.required], []],
      maxGuest: [null, [], []],
    });
  }

  get dateRange(): Date[] {
    return this._dateRange;
  }

  set dateRange(range: Date[]) {
    this._dateRange = range;
    if (this._dateRange[0] && this._dateRange[1]) {
      this.createEventForm.get('startDate')!.setValue(this._dateRange[0]);
      this.createEventForm.get('endDate')!.setValue(this._dateRange[1]);
    }
  }

  createEvent() : void {
    if (this.createEventForm.valid){
      const activity : Activity = this.createEventForm.value as Activity
      this._api.createActivity(activity)
    }
  }

}
