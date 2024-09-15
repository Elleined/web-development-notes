import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGImportModules } from './primeng-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNGImportModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'core-project';
}
