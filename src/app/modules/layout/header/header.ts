import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navItems = ['Intro', 'Experience', 'Skills', 'Projects', 'About'];

  constructor(public navigationService: NavigationService) {}

  setActive(section: string): void {
    this.navigationService.setActiveSection(section);
    // Scroll to section
    const sectionId = section.toLowerCase();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
