import { Routes } from "@angular/router";
import { HomePageComponent } from "../home/pages/home-page/home-page.component";
import { LayoutPageComponent } from "./layout.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'home', component: HomePageComponent },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ]
    }
];