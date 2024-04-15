import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bullet-point.component.html',
  styleUrl: './bullet-point.component.css'
})
export class BulletPointComponent {
  @Input() public title: string = '';
  @Input() public info: string = '';
  public arrowIcon: string = '&#8594;';
  public display: boolean = false;

  onTitleClicked() {
    this.arrowIcon = this.arrowIcon == '&#8594;' ? '&#8595;' : '&#8594;';
    this.display = !this.display;
  }
}
