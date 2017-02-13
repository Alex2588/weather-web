import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HourlyComponent } from './hourly/hourly.component';

const routes: Routes = [
    { path: '', component: HourlyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);