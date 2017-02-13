import { Component, OnInit, trigger, transition, animate, style, state } from '@angular/core';
import { CitySearchComponent } from '../../../shared/components/city-search/city-search.component';
import { ForecastDetailComponent } from '../forecast-detail/forecast-detail.component';
import { MapComponent } from '../map/map.component';
import { PeriodsForecastComponent } from '../periods-forecast/periods-forecast.component';
import { SunMoonInfoComponent } from '../sun-moon-info/sun-moon-info.component';

import { ForecastService } from './forecast.service';
import { CitySearchService } from '../../../shared/services/city-search.service';

import { City } from '../../../shared/City';

@Component({
    selector: 'ww-today-forecast',
    templateUrl: 'today-forecast.component.html',
    styleUrls: ['today-forecast.component.css'],
    animations: [
        trigger(
            'showPage', [
            state('show', style({opacity: 1, transform: 'scale(1.0)'})),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'scale(1.07)'
                }),
                animate('0.6s 0.9s ease-out')
            ])
        ])
    ]

})

export class TodayForecastComponent implements OnInit{
    private currentCity: City;
    private todayForecast;
    private periodsForecast;
    private sunMoonInfo;
    private isLoading: boolean = true;

    constructor(
        private forecastService: ForecastService,
        private citySearchService: CitySearchService
    ){
        this.currentCity = this.citySearchService.getCurrentCity();
    }

    ngOnInit(): void{
        this.forecastService.getToday(this.currentCity.zmw).subscribe(
            forecast => {
                this.todayForecast = forecast.current_observation;
                this.isLoading = false;
            }
        );

        this.getByPeriods(this.currentCity.zmw);
        
        this.citySearchService.cityChanged.subscribe(
            forecast => {
                this.currentCity = this.citySearchService.getCurrentCity();
                this.todayForecast = forecast;
                this.getByPeriods(this.currentCity.zmw);
            }    
        );

        this.forecastService.getSunMoonInfo(this.currentCity.zmw).subscribe(
            result => this.sunMoonInfo = result.moon_phase
        );
    }

    private getByPeriods(zmw: string): void{
         this.forecastService.getByPeriods(zmw).subscribe(
            periodsForecast => {
                this.periodsForecast = periodsForecast.forecast.txt_forecast.forecastday.slice(0, 4);
            }    
        )
    }

}