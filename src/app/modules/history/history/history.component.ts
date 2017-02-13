import { Component, OnInit } from '@angular/core';
import { CitySearchService } from '../../../shared/services/city-search.service';
import { HistoryService } from './history.service';
import { routeTransition } from '../../../shared/route-animate';
import { City } from '../../../shared/City';
import { MONTHS } from '../../../shared/Months-List';
 
@Component({
    selector: 'ww-history',
    templateUrl: 'history.component.html',
    styleUrls: ['history.component.css'],
    animations: [ routeTransition ]
})

export class HistoryComponent implements OnInit{
    private state: string = 'in';
    private currentCity: City;
    private months: Object[] = MONTHS;
    private dateList: number[] = [];
    private selectedMonth: string;
    private selectedDate: number;
    private selectedYear: string;
    private fullDate: string;    
    private historyForecast;
    private isLoading = true;
   
    constructor(
        private citySearchService: CitySearchService,
        private historyService: HistoryService
    ){
        this.currentCity = this.citySearchService.getCurrentCity();
        for(var i = 1; i < 32; i++){
            this.dateList.push(i);
        }
        this.selectedMonth = this.months[0]['value'];
        this.selectedDate = this.dateList[0];
    }

    ngOnInit(): void{
        this.state = (this.state === 'in'? 'out' : 'in');
        this.getForecastHistory(this.currentCity.zmw);
        this.citySearchService.cityChanged.subscribe(
            () => {
                this.currentCity = this.citySearchService.getCurrentCity();
                this.getForecastHistory(this.currentCity.zmw, this.fullDate);
            }
        )
    }

    getSelectedHistory(event): void{
        event.preventDefault();
        this.isLoading = true;
        let day = this.selectedDate < 10? '0' + this.selectedDate : this.selectedDate;
        this.fullDate = this.selectedYear + this.selectedMonth + day;
        this.getForecastHistory(this.currentCity.zmw, this.fullDate);               
    }

    private getForecastHistory(cityZmw: string, date?: string): void{
        if(date){
            this.historyService.getHistoryInfo(cityZmw, date).subscribe(
                response => {
                    this.historyForecast = response.history;
                    this.isLoading = false;
                }
            )
        }else{
            this.historyService.getHistoryInfo(cityZmw).subscribe(
                response => {
                    this.historyForecast = response.history;
                    this.isLoading = false;
                }    
            )
        }
        
    }
}