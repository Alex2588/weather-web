import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { TodayForecastComponent } from './today-forecast/today-forecast.component';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';
import { MapComponent } from './map/map.component';
import { PeriodsForecastComponent } from './periods-forecast/periods-forecast.component';
import { SunMoonInfoComponent } from './sun-moon-info/sun-moon-info.component';

import { ForecastService } from './today-forecast/forecast.service';

@NgModule({
  declarations: [
    TodayForecastComponent,
    ForecastDetailComponent,
    MapComponent, 
    PeriodsForecastComponent,
    SunMoonInfoComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbhjOPsmKH2YfgjsIiFnQnq4Fv_Mc8WTc'
    })
  ],
  providers: [ ForecastService ]
})
export class TodayModule { }
