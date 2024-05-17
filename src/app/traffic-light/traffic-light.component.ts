import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent implements OnChanges{
  @Input({required: true}) public isHorizontal!: boolean;
  @Input() public reversed: boolean = false;
  @Input({required: true}) public light!: 'r' | 'g' | 'y';

  ngOnChanges(changes: SimpleChanges): void {
    this.light = changes['light'].currentValue;
  }
}
