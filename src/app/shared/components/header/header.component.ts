import { Component, OnInit } from '@angular/core';
import { CitySearchComponent } from '../city-search/city-search.component';
import { CitySearchService } from '../../services/city-search.service';
import { ForecastService } from '../../../modules/today/today-forecast/forecast.service';
import { ToastrService } from 'toastr-ng2';
import { City } from '../../City';

@Component({
    selector: 'ww-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit{
  private currentCity: City;
  private todayForecast;
  private date: Date;

  constructor(
    private citySearchService: CitySearchService,
    private forecastService: ForecastService,
    private toastrService: ToastrService
  ){
    this.date = new Date();
  }

  ngOnInit(): void{
    this.currentCity = this.citySearchService.getCurrentCity();
    this.forecastService.getToday(this.currentCity.zmw).subscribe(
      result => {
        this.todayForecast = result['current_observation'];
      }
    )

    this.citySearchService.cityChanged.subscribe(
      forecast => this.todayForecast = forecast
    )
    
  }

  changeCurrentCity(city: City): void{
    this.currentCity = city;
    this.toastrService.success(city.name + '', 'Weather info for:' );
  }
}