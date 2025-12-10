import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection = signal<string>('intro');

  setActiveSection(section: string): void {
    this.activeSection.set(section.toLowerCase());
  }

  getSections(): string[] {
    return ['intro', 'experience', 'skills', 'projects', 'about'];
  }
}

