import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {LotsGridComponent} from "../lots-grid/lots-grid.component";
import {LotsService} from "../../services/lots.service";
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
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
    ButtonModule
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
    // this.lotService.getUnassignedLotList().subscribe((data: any) => {
    //   console.log(data);
    //   this.unAssignedLots = data.response.numFound;
    // })
      this.lotService.getAssignedLotList().subscribe((data:any)=>{
        this.assignedLots=data.response.numFound;
      })
    //   this.lotService.getLiveLotList().subscribe((data:any)=>{
    //     this.liveLots=data.response.numFound;
    //   })
    //   this.lotService.getBidApprovalList().subscribe((data:any)=>{
    //     this.bidApprovalLots=data.response.numFound;
    //   })
    //   this.lotService.getSoldList().subscribe((data:any)=>{
    //     this.soldLots=data.response.numFound;
    //   })
    // }
  }
}
