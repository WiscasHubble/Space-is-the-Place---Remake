import { Component} from '@angular/core';
import { INFORMACION_PAGINA_01, Slide } from '../../data/slides';  // <
import { GalleriaModule } from 'primeng/galleria'; //galeria
import { CommonModule } from '@angular/common';
import { TabViewChangeEvent } from 'primeng/tabview';
import { TabViewModule } from 'primeng/tabview'; // Cambia TabsModule por TabViewModule
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-landing',
  imports: [TabViewModule , GalleriaModule, CommonModule, FormsModule, DropdownModule],
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponentPage {
  /****************** TabsModule *****************/

  searchTerm: string = '';
  highlightedIndex: number | null = null;
  activeIndex: number = 0;
  currentImageIndex: number = 0;
  // Opciones para el listbox
  tabOptions: any[] = [];
  selectedTab: any;
  mostrarBarra: boolean = true;

  mostrarBuscador: boolean = false;

  toggleBuscador() {
    this.mostrarBuscador = !this.mostrarBuscador;
  }

  
  // Cada modelo será una pestaña independiente
  tabs = INFORMACION_PAGINA_01.map(model => ({
    label: model.title, // Usamos el título como nombre de la pestaña
    model: model
  }));
  
  titulos = this.tabs.map(x => ({ label: x.model.title, value: x }))

constructor(){
  this.tabOptions = INFORMACION_PAGINA_01.map(model => ({
    label: model.title,
    value: model // o algún identificador único
  }));
}

// Navegar a la pestaña seleccionada
navigateToTab() {
  if (this.selectedTab) {
    const index = this.tabOptions.findIndex(opt => opt.value === this.selectedTab.value);
    if (index >= 0) {
      this.activeIndex = index;
    }
  }
}  
  /***********************************************/

// Función para buscar y resaltar
findAndHighlightTab() {
  if (!this.searchTerm.trim()) {
    this.highlightedIndex = null;
    return;
  }

  const term = this.searchTerm.toLowerCase();
  const foundIndex = this.tabs.findIndex(tab => 
    tab.label.toLowerCase().includes(term) || 
    tab.model.info?.toLowerCase().includes(term)
  );

  if (foundIndex >= 0) {
    this.activeIndex = foundIndex; // Navega a la pestaña encontrada
  } else {
    this.highlightedIndex = null;
    // Puedes agregar un mensaje de "no encontrado" si lo deseas
  }
}



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

  getMainImage(model: Slide): string {
    const images = Array.isArray(model.img) ? model.img : [model.img];
    return images[this.currentImageIndex] || images[0];
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


