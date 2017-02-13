import { Component, Input } from '@angular/core';

@Component({
    selector: 'ww-forecast-detail',
    templateUrl: 'forecast-detail.component.html',
    styleUrls: ['forecast-detail.component.css']
})

export class ForecastDetailComponent{
    @Input() todayForecast;

    constructor(){}
}