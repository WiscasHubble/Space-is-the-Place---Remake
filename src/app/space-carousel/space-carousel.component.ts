import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  img: string;
  title: string;
  caption: string;
}

@Component({
  selector: 'app-space-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './space-carousel.component.html',
  styleUrls: ['./space-carousel.component.css']
})
export class SpaceCarouselComponent {
  slides: Slide[] = [
    {
      img: 'assets/ship1.jpg',
      title: 'Modelo número uno',
      caption: `Nota: El nombre de este sitio rinde homenaje a Saturno, Sun Ra…`
    },
    {
      img: 'assets/ship2.jpg',
      title: 'Modelo número dos',
      caption: `Otra historia interesante…`
    },
    {
      img: 'assets/ship3.jpg',
      title: 'Modelo número tres',
      caption: `Más detalles sobre este modelo…`
    }
  ];
  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}