import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routes } from './example-route';
// import { RouterModule } from '@angular/router';
import {ExamplesRoutingModule } from './example-routing.module';
import {ExamplesComponent} from './examples.component';
import { CreatingComponentComponent } from './components/creating-component/creating-component.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { MatTabsModule } from '@angular/material';
import { AngularSetupComponent } from './components/angular-setup/angular-setup.component';
import { AngularIntroComponent } from './components/angular-intro/angular-intro.component';
import { AngularTypescriptComponent } from './components/angular-typescript/angular-typescript.component';
import { AngularDependenciesComponent } from './components/angular-dependencies/angular-dependencies.component';
import { AngularTsComponent } from './components/angular-ts/angular-ts.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { AngularLifeCycleComponent } from './components/angular-life-cycle/angular-life-cycle.component';
import { AngularModulesComponent } from './components/angular-modules/angular-modules.component';
import { AngularServicesComponent } from './components/angular-services/angular-services.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    CreatingComponentComponent,
    TwowaybindingComponent,
    AngularSetupComponent,
    AngularIntroComponent,
    AngularTypescriptComponent,
    AngularDependenciesComponent,
    AngularTsComponent,
    TwoWayBindingComponent,
    AngularLifeCycleComponent,
    AngularModulesComponent,
    AngularServicesComponent
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


