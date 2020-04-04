import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DevicesComponent } from 'src/app/modules/devices/devices.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DevicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
