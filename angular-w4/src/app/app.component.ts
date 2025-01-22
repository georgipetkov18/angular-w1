import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { Subject, Subscription } from 'rxjs';
import { EmergencyService } from './emergency.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  public horizontalLight: 'r' | 'g' | 'y' = 'r';
  public verticalLight: 'r' | 'g' | 'y' = 'g';
  public emergencyBtnIsDisabled = false;
  public emergencyService: EmergencyService = inject(EmergencyService);
  
  private lastHorizontalMainLight: 'r' | 'g' | 'y' = 'g';
  private lastVerticalMainLight: 'r' | 'g' | 'y' = 'r';
  private currentTimeout!: any;
  private emergencyModeEndSub!: Subscription;


  ngOnInit(): void {
    this.emergencyModeEndSub = this.emergencyService.emergencyModeEnd.subscribe(() => {
      if (!this.emergencyBtnIsDisabled) {
        this.switchToMainLights();
        this.emergencyBtnIsDisabled = true;
        setTimeout(() => {
          this.emergencyBtnIsDisabled = false;
        }, 10000);
      }
    });

    this.switchToMainLights();
  };

  switchToMainLights() {
    this.lastHorizontalMainLight === 'r' ? this.horizontalLight = 'g' : this.horizontalLight = 'r';
    this.lastVerticalMainLight === 'r' ? this.verticalLight = 'g' : this.verticalLight = 'r';

    this.lastHorizontalMainLight = this.horizontalLight;
    this.lastVerticalMainLight = this.verticalLight;
    this.currentTimeout = setTimeout(() => {
      this.switchToYellowLights();
    }, 5000);
  }

  switchToYellowLights() {
    this.horizontalLight = 'y';
    this.verticalLight = 'y';

    this.currentTimeout = setTimeout(() => {
      this.switchToMainLights();
    }, 2000);
  }

  onEmergencyBtnClick() {
    clearTimeout(this.currentTimeout);
    this.horizontalLight = 'y';
    this.verticalLight = 'y';
    this.emergencyService.startEmergencyMode();
  }

  ngOnDestroy(): void {
    this.emergencyModeEndSub.unsubscribe();
  }
}
