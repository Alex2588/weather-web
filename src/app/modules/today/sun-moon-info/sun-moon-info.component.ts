import { Component, Input } from '@angular/core';

@Component({
    selector: 'ww-sun-moon-info',
    templateUrl: 'sun-moon-info.component.html',
    styleUrls: ['sun-moon-info.component.css']
})

export class SunMoonInfoComponent{
    @Input() sunMoonInfo;
}