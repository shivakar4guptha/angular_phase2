import {Routes} from '@angular/router';
import { FirstCompComponent } from "./first-comp/first-comp.component";
import { SecondComponent } from "./second/second.component";
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { RoterGarudService } from './roter-garud.service';
import {TestComponent} from './test/test.component';
import { AboutComponent } from './about/about.component';
import { ExamplesComponent } from './examples/examples.component';
import { LiveComponent } from './live/live.component';
import { CreatingComponentComponent } from './examples/components/creating-component/creating-component.component';
import { TwowaybindingComponent } from './examples/components/twowaybinding/twowaybinding.component';
import { AngularIntroComponent } from './examples/components/angular-intro/angular-intro.component';
import { AngularSetupComponent } from './examples/components/angular-setup/angular-setup.component';

export const routes: Routes = [
 
  {
    path : "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  {
    path: "examples",
    component: ExamplesComponent,
    children : [
      {
        path:"",
        component: CreatingComponentComponent
      },
      {
          path:"compCreation",
          component: CreatingComponentComponent
      },
      {
          path:"dataBinding",
          component: TwowaybindingComponent
      },
      {
          path:"intro",
          component: AngularIntroComponent
      },
      {
          path:"setup",
          component: AngularSetupComponent
      }
    ]
  },
  {
    path: "live",
    component: LiveComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
    {
      path : "click1",
      component: FirstCompComponent,
      //canActivate : [ RoterGarudService ],
    //   data: {
    //     "abc": "data",
    //     "isAvail":true
    // }
    },
    {
      path: "secondComp",
      component: SecondComponent,
      children : [
        {path : "child1",  component: ChildComponent}
      ]
      
    },
    // {
    //   path: "testComp",
    //   component: TestComponent
    // },
    {
      path: "lazy",
      loadChildren : "./lazy/lazy.module#LazyModule"
    },
    {
      path: "delayed",
      loadChildren: "./delay-load/delay-load.module#DelayLoadModule"
    }
  ];

  