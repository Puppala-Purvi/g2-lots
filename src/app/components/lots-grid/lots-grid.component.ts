import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LotsService} from "../../services/lots.service";
import {CardModule} from "primeng/card";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-lots-grid',
  standalone: true,
  imports: [
    CardModule,
    CurrencyPipe,
    DatePipe,
    NgForOf
  ],
  templateUrl: './lots-grid.component.html',
  styleUrl: './lots-grid.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class LotsGridComponent implements OnInit{
  lots!: any[];
  constructor(private lotService:LotsService) {
  }
  ngOnInit() {
    this.lotService.getAssignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.lots=data.response.docs;
    })
  }
}
