import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './layout.routes';
import { LayoutPageComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    SharedModule
  ]
})
export class LayoutModule { }
