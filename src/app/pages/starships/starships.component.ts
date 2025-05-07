// landing.component.ts  (o starships.component.ts)
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INFORMACION_PAGINA_01, Slide } from '../../data/slides';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponentPage {
  // cargamos los slides (con img:string|string[])
  rawSlides: Slide[] = INFORMACION_PAGINA_01;

  // slides ya con img siempre como array
  slides = this.rawSlides.map(s => ({
    ...s,
    img: Array.isArray(s.img) ? s.img : [s.img]
  }));

  slideIndex = 0;
  imgIndex = 0;
  showModal = false;

  // getters para botones
  get prevDisabled() { return this.slideIndex === 0; }
  get nextDisabled() { return this.slideIndex === this.slides.length - 1; }

  prevSlide() {
    if (!this.prevDisabled) {
      this.slideIndex--;
      this.imgIndex = 0;
    }
  }
  nextSlide() {
    if (!this.nextDisabled) {
      this.slideIndex++;
      this.imgIndex = 0;
    }
  }
  goToSlide(i: number) {
    this.slideIndex = i;
    this.imgIndex = 0;
  }

  selectImage(i: number) {
    this.imgIndex = i;
  }

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (this.showModal && e.key === 'Escape') this.closeModal();
    else if (!this.showModal) {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    }
  }
}