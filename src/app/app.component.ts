import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kita-flohmarkt-lurup';

  ngOnInit() {
    const starsContainer = document.querySelector('body')!;
    const colors = ['#FFFA4D', '#E04DB0', '#5902EC', '#F2C9E1'];

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      star.style.width = `${Math.random() * 10 + 5}px`;
      star.style.height = star.style.width; // Quadratisch
      star.style.transform = `rotate(${Math.random() * 360}deg)`; // Zufällige Rotation
      starsContainer.appendChild(star);
    }
  }
}
