import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);