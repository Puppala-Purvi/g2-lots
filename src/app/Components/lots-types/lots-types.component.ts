import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {LotsGridComponent} from "../lots-grid/lots-grid.component";
import {LotsService} from "../../services/lots.service";
import {TableModule} from 'primeng/table';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {LotsListComponent} from "../lots-list/lots-list.component";
import {map, of, tap} from "rxjs";
import {FormsModule} from "@angular/forms";
import {LotTypeService} from "../../services/lot-type.service";
@Component({
  selector: 'app-lots-types',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    LotsGridComponent,
    TableModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    LotsListComponent,
    FormsModule,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './lots-types.component.html',
  styleUrl: './lots-types.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class LotsTypesComponent implements OnInit{
  unAssignedLotsNum: number | null = null;
  assignedLotsNum: number | null = null;
  liveLotsNum: number | null = null;
  bidApprovalLotsNum: number | null = null;
  soldLotsNum: number | null = null;
  listViewBoolean=true;


  lotsTypesList:any[]=[]


  activeSection: string = 'live';


  constructor(private lotService:LotsService,private lotTypeService:LotTypeService,private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.numFound();
    this.loadData('live');
    this.activatedRoute.queryParams.subscribe(params => {
      const listType = params['category'];
      if (listType) {
        this.loadData(listType);
      }
    });
  }

  private numFound(){
    this.lotService.getUnassignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.unAssignedLotsNum=data.response.numFound;
    })
    this.lotService.getAssignedLotList().subscribe((data:any)=>{
      this.assignedLotsNum =data.response.numFound;
    })
    this.lotService.getLiveLotList().subscribe((data:any)=>{
      this.liveLotsNum = data.response.numFound;
    })
    this.lotService.getBidApprovalList().subscribe((data:any)=>{
      this.bidApprovalLotsNum=data.response.numFound;
    })
    this.lotService.getSoldList().subscribe((data:any)=>{
      this.soldLotsNum=data.response.numFound;
    })
  }

    loadData(type: string) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { lots: type },
      });

    let apiCall
      this.activeSection = type;
    switch (type) {
      case 'unassigned':
        apiCall = this.lotService.getUnassignedLotList();
        apiCall.subscribe((data:any)=>{
          this.lotsTypesList=data.response.docs;
        });
        break;
      case 'assigned':
        apiCall = this.lotService.getAssignedLotList();
        apiCall.subscribe((data:any)=>{
          this.lotsTypesList=data.response.docs;

        });
        break;
      case 'live':
        apiCall = this.lotService.getLiveLotList();
        apiCall.subscribe((data:any)=>{
          this.lotsTypesList=data.response.docs;

        });
        break;
      case 'bidApproval':
        apiCall = this.lotService.getBidApprovalList();
        apiCall.subscribe((data:any)=>{
          this.lotsTypesList=data.response.docs;

        });
        break;
      case 'sold':
        apiCall = this.lotService.getSoldList();
        apiCall.subscribe((data:any)=>{
          this.lotsTypesList=data.response.docs;

        });
        break;
      default:
        apiCall = of({ response: { numFound: 0 } });
    }
      // this.listViewBoolean = viewType === 'list';
  }

  listView() {
    this.listViewBoolean=true
    // this.loadData(this.activeSection, 'list');
  }

  gridView() {
    // this.loadData(this.activeSection, 'grid');
    this.listViewBoolean=false;
  }

  isActive(type: string): boolean {
    return this.activeSection ===type ;
  }
}
