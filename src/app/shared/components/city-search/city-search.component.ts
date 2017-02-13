import { Component, EventEmitter, Output, OnInit, trigger, state, style,transition, animate, keyframes } from '@angular/core';
import { CitySearchService } from '../../services/city-search.service';
import { City } from '../../City';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'ww-city-search',
    templateUrl: 'city-search.component.html',
    styleUrls: ['city-search.component.css'],
    animations: [
        trigger('showResults', [
            state('in', style({opacity: 1, transform: 'scale(1.0)'})),
            transition('* => in', [
                style({
                    opacity: 0,
                    transform: 'scale(0.8)'
                }),
                animate('0.3s ease-out')
            ]),
            state('out', style({opacity: 0, transform: 'scale(0)'})),
            transition('* => out', [
                style({
                    opacity: 1,
                    transform: 'scale(1.0)'
                }),
                animate('0.3s ease-in')
            ])
        ])
    ]
})

export class CitySearchComponent implements OnInit{
    private citySearch: string;
    private cities: Observable<City[]>;
    state: string; 
    @Output() selectedCity: EventEmitter<any>;
    private searchTermStream = new Subject<string>();

    constructor(
        private citySearchService: CitySearchService
    ){
        this.state = 'in';
        this.citySearch = '';
        this.selectedCity = new EventEmitter();
    }

    ngOnInit(): void{
        this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(() => this.citySearchService.getCities(this.citySearch))
            .subscribe((result) => {
                this.cities = result;
                this.state = 'in';
            })
    }

    getCities(): void{
        if(this.citySearch.trim() === ''){
            this.state = 'out';
        }else{
            this.searchTermStream.next(this.citySearch);
        }
    }

    selectCity(city: City): void{
        this.selectedCity.emit(city);
        this.citySearchService.setCurrentCity(city);
        this.state = 'out';
        this.citySearch = '';
    }

}