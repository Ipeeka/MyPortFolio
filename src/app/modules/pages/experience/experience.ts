import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      role: 'Software Developer',
      company: 'ePlannerPro',
      period: 'Jan 2025 - Present',
      highlights: [
        'Developing robust and scalable RESTful APIs using ASP.NET Core and NestJS, enhancing backend architecture and data handling efficiency.',
        'Building dynamic and responsive frontend applications with Angular, focusing on modular design and optimal user experience.',
        'Set up CI/CD pipelines with Azure App Services to automate build, test, and deployment processes, improving release speed and reliability.',
      ],
    },
    {
      role: 'Solution Engineer',
      company: 'Solution Engineer',
      period: 'Details coming soon',
      highlights: ['Details coming soon.'],
    },
    {
      role: 'Software Developer',
      company: 'Software Developer',
      period: 'Details coming soon',
      highlights: ['Details coming soon.'],
    },
    {
      role: 'Software Engineer',
      company: 'Software Engineer',
      period: 'Details coming soon',
      highlights: ['Details coming soon.'],
    },
  ];

  activeIndex = 0;

  setActive(index: number): void {
    this.activeIndex = index;
  }

  get currentExperience(): ExperienceItem | undefined {
    return this.experiences[this.activeIndex];
  }
}
