import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly highlights = [
    {
      title: 'Angular frontend',
      text: 'A clean starter with standalone components and a GitHub Pages-friendly build.'
    },
    {
      title: 'Static deployment',
      text: 'Build output is ready for GitHub Pages or any static host once you install dependencies.'
    },
    {
      title: 'Simple structure',
      text: 'The app is intentionally small so you can extend it into a real product without rework.'
    }
  ];
}