import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  name = 'Pawan Kumar';
  title = 'Software Engineer';
  description = `I'm a self-taught software engineer, a Bachelor in Computer Application by degree 🎓
and i am based in Vadodara City, India. I'm 23 years old and I like building(and
designing) websites, web applications, and everything in between. I speak 
Hindi,and English fluently.`;
}

