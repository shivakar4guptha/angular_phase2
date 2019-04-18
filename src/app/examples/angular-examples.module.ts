import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ExamplesRoutingModule } from './example-routing.module';
import {ExamplesComponent} from './examples.component';
import { CreatingComponentComponent } from './components/creating-component/creating-component.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';
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
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[]

})
export class AngularExamplesModule { }


