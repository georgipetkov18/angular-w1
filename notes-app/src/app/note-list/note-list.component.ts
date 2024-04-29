import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Note } from '../types';
import { NoteSummaryComponent } from '../note-summary/note-summary.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NoteSummaryComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnDestroy{
  @Input() public noteList: Note[] = [];
  @Output() public noteSelected = new EventEmitter<Note>();

  public onNoteSelected(note: Note) {
    this.noteSelected.emit(note);
  }

  ngOnDestroy(): void {
    this.noteSelected.unsubscribe();
  }
}
