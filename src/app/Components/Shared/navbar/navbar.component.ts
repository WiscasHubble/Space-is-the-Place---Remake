import { CommonModule } from '@angular/common';
import {Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'primeng/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule, CommonModule],
})
export class navbarComponent {

  tabs = [
    { route: '/', icon: 'pi pi-home', label: 'Home' },
    { route: '/visits', icon: 'pi pi-map-marker', label: 'Visits' },
    { route: '/starships', icon: 'pi pi-rocket', label: 'Starships' },
    { route: '/about', icon: 'pi pi-info-circle', label: 'About' }
  ];
   
  isActive(route: string): boolean {
    return window.location.pathname === route || 
           (route === '/' && window.location.pathname === '');
  }
}
