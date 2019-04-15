import {Routes} from '@angular/router';
//import { AngularExamplesModule }  from './angular-examples.module';
import { ExamplesComponent } from './examples.component';
import { CreatingComponentComponent } from './components/creating-component/creating-component.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
 
export const routes : Routes = [
    {
        path:"",
        component: ExamplesComponent
    },
    {
        path:"compCreation",
        component: CreatingComponentComponent
    },
    {
        path:"dataBinding",
        component: TwowaybindingComponent
    }

]