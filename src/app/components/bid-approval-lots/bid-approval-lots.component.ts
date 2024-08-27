import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TableModule} from "primeng/table";

import {CurrencyPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {LotslistService} from "../../services/lotslist.service";
import {ViewService} from "../../services/view.service";
import {CardModule} from "primeng/card";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-bid-approval-lots',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    TableModule,
    NgStyle,
    CardModule,
    TooltipModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './bid-approval-lots.component.html',
  styleUrl: './bid-approval-lots.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class BidApprovalLotsComponent implements OnInit{
  bidApprovalLots:any[]=[];
  isListView:boolean =true;

  constructor(private lotsLists:LotslistService,private viewService:ViewService) {
  }

  ngOnInit() {
    this.lotsLists.getBidApprovalList().subscribe((data:any)=>{
      this.bidApprovalLots=data.response.docs;
    })
    this.viewService.viewMode.subscribe(viewMode => {
      this.isListView = viewMode === 'list';
    });

  }
}
