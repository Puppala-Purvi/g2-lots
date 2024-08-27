import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {TableModule} from "primeng/table";
import {LotslistService} from "../../services/lotslist.service";
import {ViewService} from "../../services/view.service";
import {CardModule} from "primeng/card";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-sold-lots',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    TableModule,
    NgStyle,
    CardModule,
    NgForOf,
    NgIf,
    TooltipModule
  ],
  templateUrl: './sold-lots.component.html',
  styleUrl: './sold-lots.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class SoldLotsComponent implements OnInit{
  soldLots:any[]=[];
  isListView:boolean =true;

  constructor(private lotsLists:LotslistService,private viewService:ViewService) {
  }

  ngOnInit() {
    this.lotsLists.getSoldList().subscribe((data:any)=>{
      this.soldLots=data.response.docs;
    })
    this.viewService.viewMode.subscribe(viewMode => {
      this.isListView = viewMode === 'list';
    });

  }
}
