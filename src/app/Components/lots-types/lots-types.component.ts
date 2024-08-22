import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {LotsGridComponent} from "../lots-grid/lots-grid.component";
import {LotsService} from "../../services/lots.service";
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {LotsListComponent} from "../lots-list/lots-list.component";
import {map, of, tap} from "rxjs";
import {FormsModule} from "@angular/forms";
import {LotTypeService} from "../../services/lot-type.service";
@Component({
  selector: 'app-lots-types',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    LotsGridComponent,
    TableModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    LotsListComponent,
    FormsModule,
    RouterLinkActive
  ],
  templateUrl: './lots-types.component.html',
  styleUrl: './lots-types.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class LotsTypesComponent implements OnInit{
  unAssignedLots: number | null = null;
  assignedLots: number | null = null;
  liveLots: number | null = null;
  bidApprovalLots: number | null = null;
  soldLots: number | null = null;
  listViewBoolean=true;

  constructor(private lotService:LotsService,private lotTypeService:LotTypeService) {
  }

  ngOnInit() {
    this.resetData();
  }

  loadData(type: string) {

    let apiCall
    switch (type) {
      case 'unassigned':
        apiCall = this.lotService.getUnassignedLotList();
        let unassignedApiCall=apiCall
        this.lotTypeService.lotTypeApiCall(unassignedApiCall);
        break;
      case 'assigned':
        apiCall = this.lotService.getAssignedLotList();
        let assignedApiCall=apiCall
        this.lotTypeService.lotTypeApiCall(assignedApiCall);
        break;
      case 'live':
        apiCall = this.lotService.getLiveLotList();
        let liveApiCall=apiCall
        this.lotTypeService.lotTypeApiCall(liveApiCall);
        break;
      case 'bidApproval':
        apiCall = this.lotService.getBidApprovalList();
        let bidApprovalApiCall=apiCall
        this.lotTypeService.lotTypeApiCall(bidApprovalApiCall);
        break;
      case 'sold':
        apiCall = this.lotService.getSoldList();
        let soldApiCall=apiCall
        this.lotTypeService.lotTypeApiCall(soldApiCall);
        break;
      default:
        apiCall = of({ response: { numFound: 0 } });
    }

    apiCall.pipe(
      map((data: any) => data.response.numFound),
      tap(numFound => {
        this.resetData();
        switch (type) {
          case 'unassigned':
            this.unAssignedLots = numFound;
            break;
          case 'assigned':
            this.assignedLots = numFound;
            break;
          case 'live':
            this.liveLots = numFound;
            break;
          case 'bidApproval':
            this.bidApprovalLots = numFound;
            break;
          case 'sold':
            this.soldLots = numFound;
            break;
        }
      }),
    ).subscribe();
  }

  private resetData() {
    this.unAssignedLots =null;
    this.assignedLots = null;
    this.liveLots = null;
    this.bidApprovalLots = null;
    this.soldLots = null;
  }

  listView() {
    this.listViewBoolean=true
  }

  gridView() {
    this.listViewBoolean=false;
  }
}
