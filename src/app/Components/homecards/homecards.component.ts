import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router'; // Añade esta importación

@Component({
  selector: 'app-homecards',
  imports: [CardModule, ButtonModule, RouterModule],
  templateUrl: './homecards.component.html',
  styleUrl: './homecards.component.css'
})
export class HomecardsComponent {
    tabs = [
    { route: '/', icon: 'pi pi-home', label: 'Home' },
    { route: '/visits', icon: 'pi pi-map-marker', label: 'Visits' },
    { route: '/starships', icon: 'pi pi-rocket', label: 'Starships' },
    { route: '/about', icon: 'pi pi-info-circle', label: 'About' }
  ];
}
