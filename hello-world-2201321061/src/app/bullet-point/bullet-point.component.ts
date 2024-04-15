import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bullet-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bullet-point.component.html',
  styleUrl: './bullet-point.component.css'
})
export class BulletPointComponent implements OnChanges {
  @Input() public title: string = '';
  @Input() public info: string = '';
  @Input() public arrowIcon: string = '&#8594;';
  public display: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.arrowIcon = changes['arrowIcon'].currentValue;
    this.display = changes['arrowIcon'].currentValue === '&#8595;';
  }
}
