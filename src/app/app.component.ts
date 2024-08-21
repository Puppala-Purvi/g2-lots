import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LotsTypesComponent} from "./components/lots-types/lots-types.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LotsTypesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'g2-lots-types';
}
