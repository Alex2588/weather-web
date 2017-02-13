import { Component, Input, OnChanges, trigger, state, transition, style, animate, keyframes } from '@angular/core';

@Component({
    selector: 'ww-periods-forecast',
    templateUrl: 'periods-forecast.component.html',
    styleUrls: ['periods-forecast.component.css'],
    animations: [
        trigger('showDetails', [
            state('show', style({opacity: 1, transform: 'translateY(0)'})),
            transition('* => show', [
                animate(500, keyframes([
                    style({opacity: 0, transform: 'translateY(-20px)', offset: 0}),
                    style({opacity: 1, transform: 'translateY(5px)',  offset: 0.75}),
                    style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
                ]))
            ])
        ])
    ]
})

export class PeriodsForecastComponent implements OnChanges{
    @Input() periodsForecast;
    private currentPeriod;
    private state: string;
    
    constructor(){
    }

    ngOnChanges(): void{
        if(this.periodsForecast){
            this.periodsForecast[0].active = true;
            this.currentPeriod = this.periodsForecast[0];
        }
    }

    setActivePeriod(period): void{
        this.state = period === this.currentPeriod? 'hide' : 'show';        
        this.periodsForecast.forEach(period => period.active = false);
        period.active = true;
        this.currentPeriod = period;
    }

    animationFinished(): void{
        this.state = 'showed';
    }
}