import { Component, OnInit } from '@angular/core';
import { routeTransition } from '../../../shared/route-animate';
import { CitySearchService } from '../../../shared/services/city-search.service';
import { HourlyService } from './hourly.service';
import { City } from '../../../shared/City';

@Component({
    selector: 'ww-hourly',
    templateUrl: 'hourly.component.html',
    styleUrls: ['hourly.component.css'],
    animations: [ routeTransition ]
})

export class HourlyComponent implements OnInit{
   private state: string = 'in';
   private currentCity: City;
   private hourlyForecast;
   private isLoading: boolean = true;

   constructor(
       private CitySearchService: CitySearchService,
       private hourlyService: HourlyService
   ){
       this.currentCity = this.CitySearchService.getCurrentCity();
   }

   ngOnInit(): void{
       this.state = (this.state === 'in'? 'out' : 'in');
       this.getForecast(this.currentCity.zmw);
       this.CitySearchService.cityChanged.subscribe(
           () =>{
               this.currentCity = this.CitySearchService.getCurrentCity();
               this.getForecast(this.currentCity.zmw);
           }
       )
   }

   private getForecast(cityZmw: string): void{
       this.hourlyService.getForecast(cityZmw).subscribe(
           response => {
               this.hourlyForecast = response.hourly_forecast.slice(0, 24);
               this.isLoading = false;
           }    
       )
   } 
}