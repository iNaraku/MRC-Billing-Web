import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutePageComponent } from './pages/layoute-page/layoute-page.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './layoute.routes';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LayoutePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    SharedModule
  ]
})
export class LayouteModule { }
