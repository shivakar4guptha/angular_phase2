import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelayLoadRoutingModule } from './delay-load-routing.module';
import { DelayedComponent } from './delayed/delayed.component';

@NgModule({
  declarations: [DelayedComponent],
  imports: [
    CommonModule,
    DelayLoadRoutingModule
  ]
})
export class DelayLoadModule { }
