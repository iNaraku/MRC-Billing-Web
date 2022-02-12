import { Routes } from "@angular/router";
import { LoginPageComponent } from './pages/login/login-page/login-page.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];