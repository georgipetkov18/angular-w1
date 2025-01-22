import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BulletPointComponent } from './bullet-point/bullet-point.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BulletPointComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public arrows: string[] = new Array(5).fill('&#8594;');

  onBulletPointClicked(index: number) {
    for (let i = 0; i < this.arrows.length; i++) {
      if (i === index) {
        this.arrows[i] = this.arrows[i] === '&#8594;' ? '&#8595;' : '&#8594;';
      }
      else {
        this.arrows[i] = '&#8594;';
      }
    }
  }
}
