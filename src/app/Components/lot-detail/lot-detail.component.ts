import {Component, OnInit} from '@angular/core';
import { CardModule } from 'primeng/card';
import {LotServiceService} from "../../../services/lot-service.service";
import {Button} from "primeng/button";
@Component({
  selector: 'app-lot-detail',
  standalone: true,
  imports: [CardModule, Button],
  templateUrl: './lot-detail.component.html',
  styleUrl: './lot-detail.component.css'
})
export class LotDetailComponent  implements OnInit {
  lots!: any[];
  lotImageSrc!:any;
  constructor(private lotService:LotServiceService) {
  }
  ngOnInit() {
    this.lotService.getUnassignedLotList().subscribe((data:any)=>{
      console.log(data);
      this.lots=data.
      this.lotImageSrc=data.response.lot_thumbnail_image_path;
    })
  }

}
