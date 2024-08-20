import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LotsTypeListComponent} from "./Components/lots-type-list/lots-type-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LotsTypeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g2-lots';
}
