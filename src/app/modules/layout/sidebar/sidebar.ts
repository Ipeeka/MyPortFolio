import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  socialLinks = [
    { name: 'PDF/Resume', icon: 'fa-regular fa-file-pdf', url: 'https://drive.google.com/file/d/17nte5pqqvtu9YQKlgpZrb0098hSFWxzi/view?usp=sharing' },
    { name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/Ipeeka' },
    { name: 'Bitbucket', icon: 'fa-brands fa-bitbucket', url: 'https://bitbucket.org/pkbrat424_/workspace/overview/' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/pawan-kumar-223b3a220/' },
    // { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://instagram.com/yourusername' }
  ];
}
