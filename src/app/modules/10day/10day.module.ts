import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './10day-routing';

import { TenDayComponent } from './10day/10day.component';
import { TenDayService } from './10day/10day.service';

@NgModule({
  declarations: [
    TenDayComponent
  ],
  imports: [
    CommonModule,
    routing 
  ],
  providers: [ TenDayService ]
})
export class TenDayModule { }
