import {Component, EventEmitter, Input, input, OnInit, Output, ViewChild} from '@angular/core';
import {Table, TableLazyLoadEvent, TableModule} from "primeng/table";
import {LotsService} from "../../services/lots.service";
import {CommonModule, CurrencyPipe, DatePipe, NgStyle} from "@angular/common";
import {LotTypeService} from "../../services/lot-type.service";
import {map, tap} from "rxjs";
import {LazyLoadEvent, SortEvent} from "primeng/api";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-lots-list',
  standalone: true,
  imports: [
    TableModule,
    DatePipe,
    CurrencyPipe,
    SkeletonModule,
    NgStyle,
    CommonModule
  ],
  templateUrl: './lots-list.component.html',
  styleUrl: './lots-list.component.scss'
})
export class LotsListComponent implements OnInit {
  @Input() typelots: any[] = [];
  @Input() totalRecords: number = 0;




  ngOnInit() {
    // console.log(this.assignedlots)
    // this.lotTypeService.lotTypeEmitter.subscribe({
    //   next: (apiCall: any) => {
    //     apiCall.pipe(
    //       map((data: any) => data.response.docs),
    //       tap((docs: any[]) => {
    //         this.lots = docs;
    //       })
    //     ).subscribe();
    //   }
    // });
  }




}
