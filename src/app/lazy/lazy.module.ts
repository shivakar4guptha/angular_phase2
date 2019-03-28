import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

@NgModule({
  declarations: [LazyLoadingComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
