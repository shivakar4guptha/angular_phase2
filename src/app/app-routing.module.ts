import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {routes} from './route'; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
