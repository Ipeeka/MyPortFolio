import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
};

type CertificateItem = {
  title: string;
  issuer: string;
  url?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  tab: 'projects' | 'certificates' = 'projects';

  projects: ProjectItem[] = [
    {
      title: 'Dating App',
      description: 'Dating web application created using Angular and ASP.NET WebAPI',
      tags: ['#Angular', '#Asp.Net WebApi'],
    },
    {
      title: 'Inventory Management',
      description: 'Inventory Management web application using Asp.Net WebApi and Angular',
      tags: ['#Asp.Net WebApi', '#Angular'],
    },
    {
      title: 'Task-List App',
      description: 'Simple Task-List App using Angular',
      tags: ['#HTML', '#CSS', '#Angular'],
    },
    {
      title: 'Portfolio',
      description: 'My Portfolio website created using React and deployed on Netlify',
      tags: ['#React', '#CSS', '#JavaScript', '#HTML', '#VSCode'],
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Simple Tic-Tac-Toe Game',
      tags: ['#HTML', '#CSS', '#JavaScript', '#Angular'],
    },
    {
      title: 'Weather',
      description: 'Weather App in Angular',
      tags: ['#Angular', '#HTML', '#CSS', '#Api'],
    },
  ];

  certificates: CertificateItem[] = [
    { title: 'Introduction to HTML5', issuer: 'Coursera' },
    { title: 'Introduction to CSS3', issuer: 'Coursera' },
    { title: 'Angular Essential Training', issuer: 'LinkedIn Learning' },
    { title: 'Front-End JavaScript Frameworks: Angular', issuer: 'Coursera' },
    { title: 'The Complete 2024 Web Development Bootcamp', issuer: 'Udemy' },
    { title: 'Complete JavaScript Course for Beginners with jQuery & AJAX', issuer: 'Udemy' },
  ];

  setTab(tab: 'projects' | 'certificates'): void {
    this.tab = tab;
  }
}
