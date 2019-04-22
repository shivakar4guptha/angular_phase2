import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { Shiva1stComponent } from './shiva1st/shiva1st.component';
import { SampleService } from './sample.service';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from './module2/data/data.module';
import {KothaModule } from './sampleModule/kotha/kotha.module';
import { NewModComponent } from './sampleModule/kotha/new-mod/new-mod.component';
import { ChildComponent } from './child/child.component';
import {RoterGarudService} from './roter-garud.service';
import { FormsComponent } from './forms/forms.component';
import { CustomDir } from './forms/directiveConcept';
import { Validating } from './forms/validation.directive';
import { CreditCardValidator } from './creditCard.validator';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveSecondPhaseComponent } from './reactive-second-phase/reactive-second-phase.component';
import { ExploreFormComponent } from './explore-form/explore-form.component';
import { PipeConcept }  from './reactive-validation/pipe';
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
  MatTreeModule
 } from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
// import { ExamplesComponent } from './examples/examples.component';
import { LiveComponent } from './live/live.component';
import { AngularExamplesModule } from './examples/angular-examples.module';
// import { FlexLayoutModule } from "@angular/flex-layout";
import {MyNavComponent} from './my-nav/my-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstCompComponent,
    SecondComponent,
    Shiva1stComponent,
    NewModComponent,
    ChildComponent,
    FormsComponent,
    CustomDir,
    CreditCardValidator,
    ReactiveValidationComponent,
    ReactiveSecondPhaseComponent,
    ExploreFormComponent,
    PipeConcept,
    AboutComponent,
    LiveComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataModule,
    KothaModule,
    ReactiveFormsModule,
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
    MatTreeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularExamplesModule
  ],
  providers: [RoterGarudService, Validating],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
