import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 activeSection: string = 'overview'; // Sección inicial

  setActiveSection(section: string): void {
    this.activeSection = section; // Cambia la sección activa
  }
}
