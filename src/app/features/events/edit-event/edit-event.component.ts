import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {activityService} from "../../../shared/servies/activity.service";
import {Activity} from "../../../shared/models/activity";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.sass']
})
export class EditEventComponent {

  date: Date = new Date();
  dateSelected: boolean = false;
  editEventForm: FormGroup;
  activityId? : number

  private _dateRange: Date[] = []

  constructor(private _api: activityService, _fb: FormBuilder, route: ActivatedRoute, private _router : Router) {

    this.editEventForm = _fb.group({
      name: [null, [Validators.required, Validators.maxLength(100)]],
      description: [null, [Validators.maxLength(500)]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      maxGuest: [null]
    });

    route.paramMap.pipe().subscribe(params => {
      const id : string | null = params.get('id')
      this.activityId = parseInt(id!)
      const activityId: number = parseInt(id!)

      this._api.getActivityById(activityId).subscribe(activity => {
        const startDate : Date = this.convertDate(activity.startDate)
        const endDate : Date = this.convertDate(activity.endDate)
        this.dateRange = [startDate, endDate]

        this.editEventForm = _fb.group({
          name: [activity.name, [Validators.required, Validators.maxLength(100)], []],
          description: [activity.description, [Validators.maxLength(500)], []],
          startDate: [activity.startDate, [Validators.required], []],
          endDate: [activity.endDate, [Validators.required], []],
          maxGuest: [activity.maxGuest, [], []],
        });
      });
    })


  }

  get dateRange(): Date[] {
    return this._dateRange;
  }

  set dateRange(range: Date[]) {
    this._dateRange = range;
    if (this._dateRange[0] && this._dateRange[1]) {
      this.editEventForm.get('startDate')!.setValue(this._dateRange[0]);
      this.editEventForm.get('endDate')!.setValue(this._dateRange[1]);
    }
  }

  convertDate(date : Date) : Date {
    const dateString = date.toString()
    const [datePart, timePart] = dateString.split('T');

    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);

    return new Date(year, month - 1, day, hour, minute, second);
  }

  modifyEvent(): void {
    console.log(this.editEventForm.valid, this.editEventForm.value)
    if (this.editEventForm.valid) {
      const activity: Activity = this.editEventForm.value as Activity
      this._api.editActivity(activity, this.activityId!);
      this._router.navigate(['/eventDetail/'+this.activityId])
    }
  }

  deleteEvent(): void {
    this._api.deleteActivity(this.activityId!).subscribe({
      next : response => {

      },
      error : error => {
        console.log(error.error.detail)
      }
    });
    this._router.navigate(['/events'])
  }

}
