import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { SomeComponent } from './some/some.component';
import { SomengComponent } from './someng/someng.component';

@NgModule({
  declarations: [DataComponent, SomeComponent, SomengComponent],
  imports: [
    CommonModule
  ],
  exports: [ SomeComponent ]
})
export class DataModule { }
