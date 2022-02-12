import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginModule } from './pages/login/login.module';
import { LayouteModule } from './pages/layoute/layoute.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    LoginModule,
    LayouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
