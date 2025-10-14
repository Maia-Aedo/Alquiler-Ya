import { Component, HostListener } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'María Gómez',
      role: 'Inquilina - Buenos Aires',
      text: 'Encontré el departamento perfecto para mi familia en tiempo récord. El proceso fue transparente y el propietario respondió rápido a cada consulta. Recomiendo la plataforma para quienes buscan alquileres confiables.',
      avatar: 'https://i.pravatar.cc/150?img=30'
    },
    {
      name: 'Carlos Fernández',
      role: 'Propietario - Córdoba',
      text: 'Como propietario, publicarlo fue facilísimo. Las herramientas de contacto con potenciales inquilinos me ahorraron mucho tiempo y la publicación llegó a personas realmente interesadas.',
      avatar: 'https://i.pravatar.cc/150?img=15'
    },
    {
      name: 'Lucía Ramírez',
      role: 'Inquilina - Rosario',
      text: 'La atención al cliente fue muy amable y me ayudaron a coordinar visitas rápido. La ficha de cada propiedad tiene toda la información que necesito para decidir con confianza.',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'Javier Martínez',
      role: 'Propietario - Mendoza',
      text: 'Subir mis propiedades y gestionar visitas es muy intuitivo. Además, recibí una reserva en menos de una semana gracias a la visibilidad que ofrece el portal.',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Sofía Alvarez',
      role: 'Inquilina - Salta',
      text: 'La búsqueda por barrio y filtros me permitieron encontrar justo lo que quería. Las fotos y descripciones son claras, lo que evitó visitas innecesarias.',
      avatar: 'https://i.pravatar.cc/150?img=22'
    }
  ];

  currentIndex = 0;
  autoplayIntervalMs = 5000;
  private autoplayId: any = null;

  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 50; // px

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.clearAutoplay();
  }

  startAutoplay() {
    this.clearAutoplay();
    this.autoplayId = setInterval(() => this.goToNext(), this.autoplayIntervalMs);
  }

  clearAutoplay() {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }

  pause() {
    this.clearAutoplay();
  }

  resume() {
    this.startAutoplay();
  }

  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToPrev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(i: number) {
    this.currentIndex = i;
    this.pause();
    // reanudar después de pequeño delay para UX
    setTimeout(() => this.resume(), 3000);
  }

  // keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') this.goToNext();
    if (event.key === 'ArrowLeft') this.goToPrev();
  }

  // Touch / swipe handlers
  onTouchStart(evt: TouchEvent) {
    this.touchStartX = evt.touches[0].clientX;
  }

  onTouchMove(evt: TouchEvent) {
    this.touchEndX = evt.touches[0].clientX;
  }

  onTouchEnd() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff > 0) {
        this.goToNext(); // swipe left
      } else {
        this.goToPrev(); // swipe right
      }
    }
    // reset
    this.touchStartX = 0;
    this.touchEndX = 0;
  }
}
