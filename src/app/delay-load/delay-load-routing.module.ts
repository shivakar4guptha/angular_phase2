import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelayedComponent} from './delayed/delayed.component';

const routes: Routes = [
  {
    path:"something",
    component: DelayedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelayLoadRoutingModule { }
