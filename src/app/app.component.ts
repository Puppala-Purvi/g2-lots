import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LotsTypesComponent} from "./components/lots-types/lots-types.component";
import {LotsListComponent} from "./components/lots-list/lots-list.component";
import {LotsGridComponent} from "./components/lots-grid/lots-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LotsTypesComponent, LotsListComponent, LotsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'g2-lots';
}
