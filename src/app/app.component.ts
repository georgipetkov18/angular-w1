import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public horizontalLight: 'r' | 'g' | 'y' = 'r';
  public verticalLight: 'r' | 'g' | 'y' = 'g';
  
  private lastHorizontalMainLight: 'r' | 'g' | 'y' = 'g';
  private lastVerticalMainLight: 'r' | 'g' | 'y' = 'r';

  ngOnInit(): void {
    this.switchToMainLights();
  };

  switchToMainLights() {
    this.lastHorizontalMainLight === 'r' ? this.horizontalLight = 'g' : this.horizontalLight = 'r';
    this.lastVerticalMainLight === 'r' ? this.verticalLight = 'g' : this.verticalLight = 'r';

    this.lastHorizontalMainLight = this.horizontalLight;
    this.lastVerticalMainLight = this.verticalLight;
    setTimeout(() => {
      this.switchToYellowLights();
    }, 5000);
  }

  switchToYellowLights() {
    debugger
    this.horizontalLight = 'y';
    this.verticalLight = 'y';

    setTimeout(() => {
      this.switchToMainLights();
    }, 2000);

  }
}
