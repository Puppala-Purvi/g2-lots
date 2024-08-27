import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {LotslistService} from "../../services/lotslist.service";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {TooltipModule} from "primeng/tooltip";
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'app-live-lots',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgStyle,
    TableModule,
    CardModule,
    TooltipModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './live-lots.component.html',
  styleUrl: './live-lots.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class LiveLotsComponent implements OnInit{
  liveLots:any[]=[];
  isListView:boolean =true;
  constructor(private lotsLists:LotslistService,private viewService:ViewService) {
  }

  ngOnInit() {
    this.lotsLists.getLiveLotList().subscribe((data:any)=>{
      this.liveLots=data.response.docs;
    })
    this.viewService.viewMode.subscribe(viewMode => {
      this.isListView = viewMode === 'list';
    });
  }
}
