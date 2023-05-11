import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AloneButtonComponent } from '../shared/components/atoms/alone-button/alone-button.component';

/* NGRX */
/* import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../core/store/counter.reducer'; */


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AloneButtonComponent,
  ]
})
export class HomeModule { }
