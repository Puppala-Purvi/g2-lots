import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {TableModule} from "primeng/table";
import {LotslistService} from "../../services/lotslist.service";
import {CardModule} from "primeng/card";
import {TooltipModule} from "primeng/tooltip";
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'app-unassigned-lots',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    TableModule,
    NgStyle,
    CardModule,
    TooltipModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './unassigned-lots.component.html',
  styleUrl: './unassigned-lots.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class UnassignedLotsComponent implements OnInit{
  unassignedLots:any[]=[];
  isListView:boolean =true;

  constructor(private lotsLists:LotslistService,private viewService:ViewService) {
  }

  ngOnInit() {
    this.lotsLists.getUnassignedLotList().subscribe((data:any)=>{
      this.unassignedLots=data.response.docs;
    })
    this.viewService.viewMode.subscribe(viewMode => {
      this.isListView = viewMode === 'list';
    });
  }
}
