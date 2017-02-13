import { Component, OnInit } from '@angular/core';
import { routeTransition } from '../../../shared/route-animate';
import { TenDayService } from './10day.service';
import { CitySearchService } from '../../../shared/services/city-search.service';
import { City } from '../../../shared/City';

@Component({
    selector: 'ww-ten-day',
    templateUrl: '10day.component.html',
    styleUrls: ['10day.component.css'],
    animations: [ routeTransition ]
})

export class TenDayComponent implements OnInit{
   private state: string = 'in';
   private forecastInfo;
   private currentCity: City;
   private isLoading: boolean = true; 

   constructor(
       private tenDayService: TenDayService,
       private citySearchService: CitySearchService
   ){
       this.currentCity = this.citySearchService.getCurrentCity();
   }

   ngOnInit(): void{
       this.state = (this.state === 'in'? 'out' : 'in');
       this.getForecast(this.currentCity.zmw);
       this.citySearchService.cityChanged.subscribe(
            () => {
                this.currentCity = this.citySearchService.getCurrentCity();
                this.getForecast(this.currentCity.zmw);
            }    
        );
   }

   private getForecast(cityZmw: string): void{
       this.tenDayService.getForecast(cityZmw).subscribe(
           response => {
               this.forecastInfo = response.forecast.simpleforecast.forecastday;
               this.isLoading = false;
           }    
       )
   }
}