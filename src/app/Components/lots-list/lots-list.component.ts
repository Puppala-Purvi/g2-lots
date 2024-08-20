import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {LotServiceService} from "../../../services/lot-service.service";
import {CurrencyPipe, DatePipe} from "@angular/common";
import EventEmitter from "node:events";

@Component({
  selector: 'app-lots-list',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './lots-list.component.html',
  styleUrl: './lots-list.component.css',
  encapsulation:ViewEncapsulation.None
})
export class LotsListComponent implements OnInit{
  customers!: any[];
  unAssignedLots=false;
  assignedLots=false;

  @Output() showList = new EventEmitter();
  constructor(private lotService:LotServiceService) {
  }

  ngOnInit() {
    this.lotService.getUnassignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.customers=data.response.docs;
    })
    this.lotService.getAssignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.customers=data.response.docs;
    })
    // this.lotService.getLiveLotList().subscribe((data:any)=>{
    //   console.log(data);
    //   this.customers=data.response.docs;
    // })
  }

  unAssignedLotsList(){
    this.unAssignedLots=true;
  }

  assignedLotsList() {
    this.assignedLots=true;
  }
}
