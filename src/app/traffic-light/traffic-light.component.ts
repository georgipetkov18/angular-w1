import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { EmergencyService } from '../emergency.service';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) public isHorizontal!: boolean;
  @Input({ required: true }) public light!: 'r' | 'g' | 'y' | null;
  @Input() public reversed: boolean = false;
  public emergencyService: EmergencyService = inject(EmergencyService);
  private emergencyModeStartSub!: Subscription;

  ngOnInit(): void {
    this.emergencyService.emergencyModeStart.subscribe(() => {
      this.executeEmergencyMode();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.light = changes['light'].currentValue;
  }

  onCrossBtnClicked() {
    if (this.light === 'y') {
      alert('Неправилно пресичане');
    }
  }

  executeEmergencyMode() {
    let interval: any;

    setTimeout(() => {
      clearInterval(interval);
      this.emergencyService.endEmergencyMode();
    }, 10000);

    interval = setInterval(() => {
      this.light ? this.light = null : this.light = 'y';
    }, 1000);
  }

  ngOnDestroy(): void {
    this.emergencyModeStartSub.unsubscribe();
  }
}
