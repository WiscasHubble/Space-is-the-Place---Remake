import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INFORMACION_PAGINA_01, Slide } from '../../data/slides';  // <—Aquí

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})

export class StarshipsComponentPage {
  slides: Slide[] = INFORMACION_PAGINA_01;

  currentIndex = 0;
  showModal = false;
  modalSlide!: Slide;
  autoplay = false;
  intervalId?: any;

  get prevDisabled() { return this.currentIndex === 0; }
  get nextDisabled() { return this.currentIndex === this.slides.length - 1; }


  prev() {
    if (!this.prevDisabled) this.currentIndex--;
  }
  next() {
    if (!this.nextDisabled) this.currentIndex++;
  }
  goTo(i: number) {
    this.currentIndex = i;
  }

  openModal(i: number) {
    this.modalSlide = this.slides[i];
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

  toggleAutoplay() {
    this.autoplay = !this.autoplay;
    if (this.autoplay) {
      this.intervalId = setInterval(() => this.next(), 3000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  // Teclado: ← → para slides, Esc para modal
  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (this.showModal && e.key === 'Escape') {
      this.closeModal();
    } else if (!this.showModal) {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    }
  }

  // placeholder si falla la img
  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = 'https://es.azeheb.com/blog/wp-content/uploads/2017/03/4.jpg';
  }

}


