import { Component} from '@angular/core';
import { INFORMACION_PAGINA_01, Slide } from '../../data/slides';  // <—Aquí
import { GalleriaModule } from 'primeng/galleria'; //galeria
import { CommonModule } from '@angular/common';
import { TabViewChangeEvent } from 'primeng/tabview';
import { TabViewModule } from 'primeng/tabview'; // Cambia TabsModule por TabViewModule

@Component({
  selector: 'app-landing',
  imports: [TabViewModule , GalleriaModule, CommonModule],
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponentPage {
  /****************** TabsModule *****************/

  // Cada modelo será una pestaña independiente
  tabs = INFORMACION_PAGINA_01.map(model => ({
    label: model.title, // Usamos el título como nombre de la pestaña
    model: model
  }));

  activeIndex: number=0;

  /***********************************************/





  /********************* Galleria **************************/


  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];



// Transforma las imágenes del modelo al formato que Galleria espera
  getGalleryImages(model: Slide): any[] {
    const images = Array.isArray(model.img) ? model.img : [model.img];
    return images.map(img => ({
      itemImageSrc: img,
      thumbnailImageSrc: img
    }));
  }

  /***********************************************/
  
  // slides: Slide[] = INFORMACION_PAGINA_01;

  // currentIndex = 0;
  // showModal = false;
  // modalSlide!: Slide;
  // autoplay = false;
  // intervalId?: any;

  // get prevDisabled() { return this.currentIndex === 0; }
  // get nextDisabled() { return this.currentIndex === this.slides.length - 1; }


  // prev() {
  //   if (!this.prevDisabled) this.currentIndex--;
  // }
  // next() {
  //   if (!this.nextDisabled) this.currentIndex++;
  // }
  // goTo(i: number) {
  //   this.currentIndex = i;
  // }

  // openModal(i: number) {
  //   this.modalSlide = this.slides[i];
  //   this.showModal = true;
  // }
  // closeModal() {
  //   this.showModal = false;
  // }

  // toggleAutoplay() {
  //   this.autoplay = !this.autoplay;
  //   if (this.autoplay) {
  //     this.intervalId = setInterval(() => this.next(), 3000);
  //   } else {
  //     clearInterval(this.intervalId);
  //   }
  // }

  // // Teclado: ← → para slides, Esc para modal
  // @HostListener('window:keydown', ['$event'])
  // onKeydown(e: KeyboardEvent) {
  //   if (this.showModal && e.key === 'Escape') {
  //     this.closeModal();
  //   } else if (!this.showModal) {
  //     if (e.key === 'ArrowLeft') this.prev();
  //     if (e.key === 'ArrowRight') this.next();
  //   }
  // }

  // // placeholder si falla la img
  // onImgError(e: Event) {
  //   (e.target as HTMLImageElement).src = 'https://es.azeheb.com/blog/wp-content/uploads/2017/03/4.jpg';
  // }

}


