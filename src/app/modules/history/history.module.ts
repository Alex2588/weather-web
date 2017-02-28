import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './history-routing';

import { HistoryComponent } from './history/history.component';
import { HistoryService } from './history/history.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        HistoryComponent
    ],
    providers: [ HistoryService ]  
})

export class HistoryModule{

}