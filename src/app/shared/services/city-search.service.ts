import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ForecastService } from '../../modules/today/today-forecast/forecast.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { City } from '../City';
import { DEFAULT_CITY } from '../Default-City';


@Injectable()

export class CitySearchService{
    private cityURL: string;
    private readonly defaultCity: City = DEFAULT_CITY;
    cityChanged: EventEmitter<any>;

    constructor(
        private http: Http,
        private forecastService: ForecastService
    ){
        this.cityURL = 'http://localhost:4200/search/aq?query=';
        this.cityChanged = new EventEmitter();
    }

    getCities(query: string): Observable<any> {
        return this.http.get(this.cityURL + query)
            .map(
                (response: Response) => response.json()['RESULTS']
            )
            .catch(this.handleError);
    }

    setCurrentCity(city: City): void{
        let currentCity = JSON.stringify(city);
        localStorage.setItem('currentCity', currentCity);
        this.forecastService.getToday(city.zmw).subscribe(
            forecast => this.cityChanged.emit(forecast.current_observation)
        )
    }

    getCurrentCity(): City{
        if(localStorage['currentCity'] && localStorage['currentCity'].length){
            let city = JSON.parse(localStorage.getItem('currentCity'));
            return city;
        }
        return this.defaultCity;
    }

     private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'System error');
    }
}