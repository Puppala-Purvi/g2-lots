import {Component, OnInit, Output} from '@angular/core';
import {TableModule} from "primeng/table";
import {LotsService} from "../../services/lots.service";
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-lots-list',
  standalone: true,
  imports: [
    TableModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './lots-list.component.html',
  styleUrl: './lots-list.component.scss'
})
export class LotsListComponent implements OnInit {
  lots!: any[];
  unAssignedLots=false;
  assignedLots=false;

  constructor(private lotService:LotsService) {
  }

  ngOnInit() {
    // this.lotService.getUnassignedLotList().subscribe((data:any)=>{
    //   console.log(data);
    //   this.customers=data.response.docs;
    // })
    this.lotService.getAssignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.lots=data.response.docs;
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
