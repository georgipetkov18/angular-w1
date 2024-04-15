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
  
}
