import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Note } from '../types';

@Component({
  selector: 'app-note-summary',
  standalone: true,
  imports: [],
  templateUrl: './note-summary.component.html',
  styleUrl: './note-summary.component.css'
})
export class NoteSummaryComponent implements OnDestroy {
  @Input() public note!: Note;
  @Output() public onDelete = new EventEmitter();
  @Output() public onEdit = new EventEmitter();
  public buttonsVisible = false;

  public onClick() {
    this.buttonsVisible = !this.buttonsVisible;
  }

  public onDeleteClicked() {
    this.onDelete.emit();
  }

  public onEditClicked() {
    this.onEdit.emit();
  }

  ngOnDestroy(): void {
    this.onDelete.unsubscribe();
    this.onEdit.unsubscribe();
  }
}
