import {Component, OnInit} from '@angular/core';
import {LotslistService} from "../../services/lotslist.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {LiveLotsComponent} from "../live-lots/live-lots.component";
import {BidApprovalLotsComponent} from "../bid-approval-lots/bid-approval-lots.component";
import {ViewService} from "../../services/view.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    LiveLotsComponent,
    BidApprovalLotsComponent,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  unAssignedLotsNum!: null;
  assignedLotsNum!: null;
  liveLotsNum!: null;
  bidApprovalLotsNum!: null;
  soldLotsNum!: null;
  listViewBoolean:boolean=true;

  constructor(private lotslist:LotslistService,private viewService:ViewService,private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.numFoundValue();
    this.activatedRoute.queryParams.subscribe(params => {
    });
    if (this.listViewBoolean) {
      this.setListView();
    }
  }

  numFoundValue(){
    this.lotslist.getUnassignedLotList().subscribe((data:any)=>{
      this.unAssignedLotsNum=data.response.numFound;
    })
    this.lotslist.getAssignedLotList().subscribe((data:any)=>{
      this.assignedLotsNum=data.response.numFound;
    })
    this.lotslist.getLiveLotList().subscribe((data:any)=>{
      this.liveLotsNum=data.response.numFound;
    })
    this.lotslist.getBidApprovalList().subscribe((data:any)=>{
      this.bidApprovalLotsNum=data.response.numFound;
    })
    this.lotslist.getSoldList().subscribe((data:any)=>{
      this.soldLotsNum=data.response.numFound;
    })
  }

  listView() {
    this.listViewBoolean=true;
    this.viewService.setViewMode('list');
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { l: 'list' },
      queryParamsHandling: 'merge'
    });

  }

  gridView() {
    this.listViewBoolean=false;
    this.viewService.setViewMode('grid');
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { l: 'grid' },
      queryParamsHandling: 'merge'
    });

  }

   setListView() {
    this.listViewBoolean = true;
    this.viewService.setViewMode('list');
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { l: 'list' },
      queryParamsHandling: 'merge'
    });
  }

}
