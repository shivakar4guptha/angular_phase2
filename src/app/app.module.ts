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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstCompComponent,
    SecondComponent,
    Shiva1stComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
