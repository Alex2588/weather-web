import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './hourly-routing';

import { HourlyComponent } from './hourly/hourly.component';
import { HourlyService } from './hourly/hourly.service';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        HourlyComponent
    ],
    providers: [ HourlyService ]
})

export class HourlyModule{

}