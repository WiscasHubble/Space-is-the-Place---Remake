import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-about',
  imports: [GalleriaModule, CardModule, TabViewModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponentPage {
friendsList = [
  { name: "Ron Caswell", years: "1954 - 2019", image: "assets/ron.jpg", description: "Shared my passion for spaceflight..." },
  { name: "Butch Head", years: "1952 - 2005", image: "assets/butch.jpg", description: "A dear friend and space enthusiast..." },
  { name: "Barry Shanko", years: "1960 - 2020", image: "assets/barry.jpg", description: "Called my collection 'The Shrine'..." }
];

shrineImages = [
    { 
      src: "assets/shrine-1.jpg", 
      title: "The Shrine", 
      description: "My space museum with models and memorabilia..." 
    },
    // Agrega más imágenes aquí
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
