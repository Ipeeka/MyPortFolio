import { Component, signal, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './modules/layout/header/header';
import { Sidebar } from './modules/layout/sidebar/sidebar';
import { Intro } from './modules/pages/intro/intro';
import { Experience } from './modules/pages/experience/experience';
import { Skills } from './modules/pages/skills/skills';
import { Projects } from './modules/pages/projects/projects';
import { About } from './modules/pages/about/about';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Sidebar, Intro, Experience, Skills, Projects, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Pawan Portfolio');
  private scrollTimeout: any;
  private isScrollingProgrammatically = false;
  
  constructor(public navigationService: NavigationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Initial check for active section after view is ready to avoid wrong section on reload
    setTimeout(() => this.updateActiveSection(), 0);
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.isScrollingProgrammatically) {
      return;
    }

    // Debounce scroll events
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      this.updateActiveSection();
    }, 100);
  }

  private updateActiveSection(): void {
    const sections = ['intro', 'experience', 'skills', 'projects', 'about'];
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger when section is 1/3 from top

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const currentSection = sections[i];
          if (this.navigationService.activeSection() !== currentSection) {
            this.navigationService.setActiveSection(currentSection);
          }
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.isScrollingProgrammatically = true;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        this.isScrollingProgrammatically = false;
      }, 1000);
    }
  }
}
