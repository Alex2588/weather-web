import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { USER_APIKEY } from '../../../shared/User-Apikey';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class HistoryService{
    private readonly userKey: string;
    private readonly historyUrl: string;
    private today: Date = new Date();
    private currentYear: number = this.today.getFullYear();
    private currentMonth: number|string = this.today.getMonth() < 10? '0' + (this.today.getMonth() + 1) : this.today.getMonth();
    private currentDay: number = this.today.getDate();
    private searchedDate: string;


    constructor(private http: Http){
        this.userKey = USER_APIKEY;
        this.searchedDate = '' + this.currentYear + this.currentMonth + this.currentDay;
        this.historyUrl = `http://api.wunderground.com/api/${this.userKey}/history_`;
    }

    getHistoryInfo(cityZmw: string, dateStr?: string): Observable<any>{
        let date = dateStr? dateStr : this.searchedDate;
        return this.http.get(this.historyUrl + date + '/q/zmw:' + cityZmw + '.json')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'System error');
    }
}