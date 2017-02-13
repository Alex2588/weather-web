import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history/history.component';

const routes: Routes = [
    { path: '', component: HistoryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);