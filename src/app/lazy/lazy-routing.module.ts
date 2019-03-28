import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
const routes: Routes = [
  {path: "compRoute", component: LazyLoadingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
