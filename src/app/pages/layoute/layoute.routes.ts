import { Routes } from "@angular/router";
import { HomePageComponent } from "../home/pages/home-page/home-page.component";
import { LayoutePageComponent } from './pages/layoute-page/layoute-page.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: LayoutePageComponent,
        children: [
            { path: 'home', component: HomePageComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];