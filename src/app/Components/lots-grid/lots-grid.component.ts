import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LotsService} from "../../services/lots.service";
import {CardModule} from "primeng/card";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {map, tap} from "rxjs";
import {LotTypeService} from "../../services/lot-type.service";

@Component({
  selector: 'app-lots-grid',
  standalone: true,
  imports: [
    CardModule,
    CurrencyPipe,
    DatePipe,
    NgForOf,
    TooltipModule
  ],
  templateUrl: './lots-grid.component.html',
  styleUrl: './lots-grid.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class LotsGridComponent implements OnInit{
  @Input() typelots:any[] = [];
  constructor(private lotService: LotsService, private lotTypeService: LotTypeService) {
  }

  ngOnInit() {
    console.log(this.typelots)
  //   this.lotTypeService.lotTypeEmitter.subscribe({
  //     next: (apiCall: any) => {
  //       apiCall.pipe(
  //         map((data: any) => data.response.docs),
  //         tap((docs: any[]) => {
  //           this.lots = docs;
  //         })
  //       ).subscribe();
  //     }
  //   });
  //
  }
}
