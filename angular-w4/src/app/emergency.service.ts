import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {
  public emergencyModeStart: Subject<void> = new Subject<void>();
  public emergencyModeEnd: Subject<void> = new Subject<void>();

  constructor() { }


  public startEmergencyMode() {
    this.emergencyModeStart.next();
  }

  public endEmergencyMode() {
    this.emergencyModeEnd.next();
  }

}
