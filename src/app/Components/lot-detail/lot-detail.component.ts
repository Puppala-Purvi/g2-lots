import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CardModule} from 'primeng/card';
import {LotServiceService} from "../../../services/lot-service.service";
import {Button, ButtonModule} from "primeng/button";
import {CurrencyPipe, DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-lot-detail',
  standalone: true,
  imports: [CardModule, ButtonModule, NgOptimizedImage, NgForOf, TableModule, CurrencyPipe, DatePipe],
  templateUrl: './lot-detail.component.html',
  styleUrl: './lot-detail.component.css',
  encapsulation:ViewEncapsulation.None
})
export class LotDetailComponent  implements OnInit {
  lots!: any[];
  constructor(private lotService:LotServiceService) {
  }
  ngOnInit() {
    this.lotService.getAssignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.lots=data.response.docs;
    })
  }

}
