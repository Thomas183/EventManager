import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LogOnComponent } from './log-on/log-on.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    RegisterComponent,
    LogOnComponent
  ],
  exports: [
    RegisterComponent,
    LogOnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    InputTextModule,
    ButtonModule
  ]
})
export class UserModule { }
