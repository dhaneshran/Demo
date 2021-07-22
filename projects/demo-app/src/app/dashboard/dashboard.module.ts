import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
