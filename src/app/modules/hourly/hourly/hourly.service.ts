import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { USER_APIKEY } from '../../../shared/User-Apikey';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class HourlyService{
    private readonly forecastUrl: string;
    private readonly userKey: string;

    constructor(private http: Http){
        this.userKey = USER_APIKEY;
        this.forecastUrl = `http://api.wunderground.com/api/${this.userKey}/hourly/q/zmw:`;
    }

    getForecast(cityZmw: string): Observable<any>{
        return this.http.get(this.forecastUrl + cityZmw + '.json')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'System error');
    }
}