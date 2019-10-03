import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);