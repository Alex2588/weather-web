import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenDayComponent } from './10day/10day.component';

const routes: Routes = [
  { path: '', component: TenDayComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);