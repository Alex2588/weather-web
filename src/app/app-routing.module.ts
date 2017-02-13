import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayModule } from './modules/today/today.module';
import { TodayForecastComponent } from './modules/today/today-forecast/today-forecast.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/weather/today', pathMatch: 'full' },
    { path: 'weather/today', component: TodayForecastComponent },
    { path: 'weather/10day', loadChildren: './modules/10day/10day.module#TenDayModule'},
    { path: 'weather/hourly', loadChildren: './modules/hourly/hourly.module#HourlyModule' },
    { path: 'weather/history', loadChildren: './modules/history/history.module#HistoryModule' },
    { path: 'about', loadChildren: './modules/about/about.module#AboutModule' }
]

@NgModule({
    imports: [ 
        TodayModule,
        RouterModule.forRoot(APP_ROUTES) 
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}

