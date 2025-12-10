import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  paragraphs = [
    "I'm an Experienced Software Engineer. Skilled in technologies like Angular, ASP.NET Core, React, HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery and Git. And also I'm a Software Developer who loves to build website and web applications to solve other people's problems. Experience of leading a team of professionals for small to medium sized projects. Highly interested in Automation frontier in software development. Strong information technology professional with a Bachelor Of Computer Application.",
    "I enjoy creating things that live both on the internet and in reality, whether that be websites, web applications or anything in between. My goal is to always build products that provide pixel-perfect, user-friendly, security efficient, performant experiences. Shortly after I graduated, I had been overly engrossed in the Software Development and the vast amount of knowledge it holds.",
    "I'm currently looking for new opportunities and I'm always open to new projects, ideas, job opportunities and new connections. I love building new stuff so just send me a message or call me and I will reply 100%."
  ];
}
