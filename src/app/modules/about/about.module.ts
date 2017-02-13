import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './about-routing';

import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        AboutComponent
    ]
})

export class AboutModule{
    
}