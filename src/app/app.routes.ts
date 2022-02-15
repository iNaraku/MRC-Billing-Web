import { Routes } from "@angular/router";
import { LoginPageComponent } from './login/login-page/login-page.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];