import { Component, Input } from '@angular/core';
import { Note } from '../types';

@Component({
  selector: 'app-note-summary',
  standalone: true,
  imports: [],
  templateUrl: './note-summary.component.html',
  styleUrl: './note-summary.component.css'
})
export class NoteSummaryComponent {
  @Input() public note!: Note;
}
