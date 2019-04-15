import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routes } from './example-route';
// import { RouterModule } from '@angular/router';
import {ExamplesRoutingModule } from './example-routing.module';
import {ExamplesComponent} from './examples.component';
import { CreatingComponentComponent } from './components/creating-component/creating-component.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    ExamplesComponent,
    CreatingComponentComponent,
    TwowaybindingComponent
  ],
  imports: [ 
    CommonModule, 
    ExamplesRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[]

})
export class AngularExamplesModule { }


