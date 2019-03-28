import {Routes} from '@angular/router';
import { FirstCompComponent } from "./first-comp/first-comp.component";
import { SecondComponent } from "./second/second.component";
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { RoterGarudService } from './roter-garud.service';
import {TestComponent} from './test/test.component';

export const routes: Routes = [
  {
    path : "",
    redirectTo: "/click1",
    pathMatch: "full"
  },
    {
      path : "click1",
      component: FirstCompComponent,
      canActivate : [ RoterGarudService ],
      data: {
        "abc": "data",
        "isAvail":true
    }
    },
    {
      path: "secondComp",
      component: SecondComponent,
      children : [
        {path : "child1",  component: ChildComponent}
      ]
      
    },
    {
      path: "testComp",
      component: TestComponent
    },
    {
      path: "lazy",
      loadChildren : "./lazy/lazy.module#LazyModule"
    },
    {
      path: "delayed",
      loadChildren: "./delay-load/delay-load.module#DelayLoadModule"
    }
  ];

  