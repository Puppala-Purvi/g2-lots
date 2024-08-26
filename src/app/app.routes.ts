import { Routes } from '@angular/router';
import {LotsTypesComponent} from "./components/lots-types/lots-types.component";
import {LotsListComponent} from "./components/lots-list/lots-list.component";
import {LotsGridComponent} from "./components/lots-grid/lots-grid.component";

export const routes: Routes = [
  {path:'',component:LotsTypesComponent}
  // { path: '', redirectTo: '/list', pathMatch: 'full' }
];

