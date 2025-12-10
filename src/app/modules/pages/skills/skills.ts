import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    '#HTML5',
    '#CSS3',
    '#Bootstrap',
    '#Angular',
    '#JavaScript',
    '#jQuery',
    '#Git',
    '#React',
    '#ASP.NET Core',
    '#MySQL',
    '#Frontend Development',
    '#SCSS',
  ];

  education = [
    {
      title: 'IGNOU 🎓',
      degree: 'Master of Computer Applications',
      duration: '( 2021 / 2023 ) — CGPA:',
      cgpa: '',
      expanded: false,
    },
    {
      title: 'North Maharashtra University 🎓',
      degree: 'Bachelor in Computer Application',
      duration: '( 2017 / 2020 ) — CGPA:',
      cgpa: '9.07',
      expanded: false,
    },
    {
      title: 'S. T. Gujar Jr. College 🎓',
      degree: undefined,
      duration: undefined,
      cgpa: undefined,
      expanded: false,
    },
  ];

  toggleEducation(index: number): void {
    this.education[index].expanded = !this.education[index].expanded;
  }
}
