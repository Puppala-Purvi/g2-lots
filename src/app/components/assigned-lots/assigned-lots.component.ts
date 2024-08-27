import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TableModule} from "primeng/table";
import {CurrencyPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {LotslistService} from "../../services/lotslist.service";
import {ViewService} from "../../services/view.service";
import {CardModule} from "primeng/card";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-assigned-lots',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgStyle, TableModule, CardModule, NgIf, NgForOf, TooltipModule
  ],
  templateUrl: './assigned-lots.component.html',
  styleUrl: './assigned-lots.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class AssignedLotsComponent implements OnInit{
  assignedLots: any[]=[];
  isListView:boolean =true;

  constructor(private lotsLists:LotslistService,private viewService:ViewService) {
  }

  ngOnInit() {
    this.lotsLists.getAssignedLotList().subscribe((data:any)=>{
      this.assignedLots=data.response.docs;
    })
    this.viewService.viewMode.subscribe(viewMode => {
      this.isListView = viewMode === 'list';
    });

  }

}
