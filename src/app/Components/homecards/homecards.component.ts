import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homecards',
  imports: [CardModule, ButtonModule],
  templateUrl: './homecards.component.html',
  styleUrl: './homecards.component.css'
})
export class HomecardsComponent {

}
