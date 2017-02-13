import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { City } from '../../../shared/City';

@Component({
    selector: 'ww-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})

export class MapComponent implements OnInit, OnChanges{
    @Input() currentCity: City;
    private lat: number;
    private lng: number;

    constructor(){}

    ngOnInit(): void{
        this.lat = +this.currentCity.lat;
        this.lng = +this.currentCity.lon;
    }

    ngOnChanges(): void{
        this.lat = +this.currentCity.lat;
        this.lng = +this.currentCity.lon;
    }
}