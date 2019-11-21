import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserGuard } from './guards/user.guard';

const appRoutes: Routes = [
    {path: 'inicio', component: HomeComponent, canActivate: [UserGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent, canActivate: [UserGuard] },
    {path: '**', component: ErrorComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);