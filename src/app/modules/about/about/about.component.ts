import { Component, OnInit } from '@angular/core';
import { routeTransition } from '../../../shared/route-animate';

@Component({
    selector: 'ww-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css'],
    animations: [ routeTransition ]
})

export class AboutComponent implements OnInit{
    private state: string = 'in';

    constructor(){

    }

    ngOnInit(){
        this.state = (this.state === 'in'? 'out' : 'in')
    }
}