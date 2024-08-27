import { Routes } from '@angular/router';
import {UnassignedLotsComponent} from "./components/unassigned-lots/unassigned-lots.component";
import {HeaderComponent} from "./components/header/header.component";
import {AssignedLotsComponent} from "./components/assigned-lots/assigned-lots.component";
import {LiveLotsComponent} from "./components/live-lots/live-lots.component";
import {BidApprovalLotsComponent} from "./components/bid-approval-lots/bid-approval-lots.component";
import {SoldLotsComponent} from "./components/sold-lots/sold-lots.component";

export const routes: Routes = [

  { path: '',   redirectTo: '/live', pathMatch: 'full' },
  {path:'',component:HeaderComponent,
    children:
      [
        {path:'unassigned',component:UnassignedLotsComponent},
        {path:'assigned',component:AssignedLotsComponent},
        {path:'live',component:LiveLotsComponent},
        {path:'bidapproval',component:BidApprovalLotsComponent},
        {path:'sold',component:SoldLotsComponent}
      ]
  },

];
