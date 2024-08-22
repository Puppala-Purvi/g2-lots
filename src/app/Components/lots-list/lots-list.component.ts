import {Component, EventEmitter, Input, input, OnInit, Output} from '@angular/core';
import {TableModule} from "primeng/table";
import {LotsService} from "../../services/lots.service";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {LotTypeService} from "../../services/lot-type.service";
import {map, tap} from "rxjs";

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
  @Input()
  lots: any[]=[];

  constructor(private lotService:LotsService,private lotTypeService:LotTypeService) {
  }

  ngOnInit() {

    this.lotTypeService.lotTypeEmitter.subscribe({
      next: (apiCall: any) => {
        apiCall.pipe(
          map((data: any) => data.response.docs),
          tap((docs: any[]) => {
            this.lots = docs;
          })
        ).subscribe();
      }
    });

  }
}
