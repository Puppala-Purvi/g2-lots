import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {LotServiceService} from "../../../services/lot-service.service";
import {LotsListComponent} from "../lots-list/lots-list.component";

@Component({
  selector: 'app-lots-type-list',
  standalone: true,
  imports: [TableModule, CommonModule, InputTextModule, ButtonModule, LotsListComponent],
  templateUrl: './lots-type-list.component.html',
  styleUrl:'./lots-type-list.component.css',
  encapsulation:ViewEncapsulation.None
})
export class LotsTypeListComponent implements OnInit{
  unAssignedLots!:number;
  assignedLots!:number;
  liveLots!:number;
  bidApprovalLots!:number;
  soldLots!:number;
  constructor(private lotService:LotServiceService) {
  }

  ngOnInit() {
    this.lotService.getUnassignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.unAssignedLots=data.response.numFound;
    })
    this.lotService.getAssignedLotList().subscribe((data:any)=>{
      this.assignedLots=data.response.numFound;
    })
    this.lotService.getLiveLotList().subscribe((data:any)=>{
      this.liveLots=data.response.numFound;
    })
    this.lotService.getBidApprovalList().subscribe((data:any)=>{
      this.bidApprovalLots=data.response.numFound;
    })
    this.lotService.getSoldList().subscribe((data:any)=>{
      this.soldLots=data.response.numFound;
    })
  }

}
