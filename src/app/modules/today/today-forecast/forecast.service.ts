import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { USER_APIKEY } from '../../../shared/User-Apikey';

@Injectable()

export class ForecastService{
    private readonly userKey: string;
    private todayForecastUrl: string;
    private periodsForecastUrl: string;
    private sunMoonInfoUrl: string;

    constructor(private http: Http){
        this.userKey = USER_APIKEY;
        this.todayForecastUrl = `http://api.wunderground.com/api/${this.userKey}/conditions/q/zmw:`;
        this.periodsForecastUrl = `http://api.wunderground.com/api/${this.userKey}/forecast/q/zmw:`;
        this.sunMoonInfoUrl = `http://api.wunderground.com/api/${this.userKey}/astronomy/q/zmw:`
    }

    getToday(zmw: string): Observable<any>{
        return this.http.get(this.todayForecastUrl + zmw + '.json')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getByPeriods(zmw: string): Observable<any>{
        return this.http.get(this.periodsForecastUrl + zmw + '.json')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getSunMoonInfo(zmw: string): Observable<any>{
        return this.http.get(this.sunMoonInfoUrl + zmw + '.json')
            .map((respone: Response) => respone.json())
            .catch(this.handleError);
    }

     private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'System error');
    }
}