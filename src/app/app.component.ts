import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarComponent } from "./Components/Shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'space-is-the-place';
}
