import { Routes } from '@angular/router';
import {LotsTypeListComponent} from "./Components/lots-type-list/lots-type-list.component";
import {LotDetailComponent} from "./Components/lot-detail/lot-detail.component";
import {LotsListComponent} from "./Components/lots-list/lots-list.component";

// export const routes: Routes = [
//   { path: '', component: LotsTypeListComponent },
//   { path: 'lots-list', component: LotsListComponent },
//   { path: 'lot-detail', component: LotDetailComponent }
// ];

export const routes: Routes = [
  {
    path: '',
    component: LotsTypeListComponent,
    children: [
      { path: 'lot-list', component: LotsListComponent },
      { path: 'lot-detail', component: LotDetailComponent },
      // { path: '', component: LotsTypeListComponent }
    ]
  }
];
