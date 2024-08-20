import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LotsTypeListComponent} from "./Components/lots-type-list/lots-type-list.component";
import {LotDetailComponent} from "./Components/lot-detail/lot-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LotsTypeListComponent, LotDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g2-lots';
}
