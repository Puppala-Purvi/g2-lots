import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {LotsGridComponent} from "../lots-grid/lots-grid.component";
import {LotsService} from "../../services/lots.service";
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {LotsListComponent} from "../lots-list/lots-list.component";
import {forkJoin} from "rxjs";
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
    LotsListComponent
  ],
  templateUrl: './lots-types.component.html',
  styleUrl: './lots-types.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class LotsTypesComponent implements OnInit{
  unAssignedLots!:number;
  assignedLots!:number;
  liveLots!:number;
  bidApprovalLots!:number;
  soldLots!:number;
  constructor(private lotService:LotsService) {
  }

  ngOnInit() {

    forkJoin({
      unAssigned: this.lotService.getUnassignedLotList(),
      assigned: this.lotService.getAssignedLotList(),
      live: this.lotService.getLiveLotList(),
      bidApproval: this.lotService.getBidApprovalList(),
      sold: this.lotService.getSoldList()
    }).subscribe({
      next: (responses: any) => {
        this.unAssignedLots = responses.unAssigned.response.numFound;
        this.assignedLots = responses.assigned.response.numFound;
        this.liveLots = responses.live.response.numFound;
        this.bidApprovalLots = responses.bidApproval.response.numFound;
        this.soldLots = responses.sold.response.numFound;
      },

    });


    // this.lotService.getUnassignedLotList().subscribe((data: any) => {
    //   console.log(data);
    //   this.unAssignedLots = data.response.numFound;
    // })
    //   this.lotService.getAssignedLotList().subscribe((data:any)=>{
    //     this.assignedLots=data.response.numFound;
    //   })
    //   this.lotService.getLiveLotList().subscribe((data:any)=>{
    //     this.liveLots=data.response.numFound;
    //   })
    //   this.lotService.getBidApprovalList().subscribe((data:any)=>{
    //     this.bidApprovalLots=data.response.numFound;
    //   })
    //   this.lotService.getSoldList().subscribe((data:any)=>{
    //     this.soldLots=data.response.numFound;
    //   })
    }
}
