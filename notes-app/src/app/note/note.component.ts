import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../types';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnChanges, OnDestroy {
  @Input() public note!: Note;
  @Output()public onNoteSaved = new EventEmitter<Note>();
  public title = '';
  public content = ''

  ngOnChanges(changes: SimpleChanges): void {
    this.title = changes['note'].currentValue.title;
    this.content = changes['note'].currentValue.content;
  }

  public saveNote() {
    if (this.title.length < 5 || this.content.length < 7) {
      return;
    }
    this.note.title = this.title;
    this.note.content = this.content;
    this.onNoteSaved.emit(this.note);
    this.title = '';
    this.content = '';
  }

  ngOnDestroy(): void {
    this.onNoteSaved.unsubscribe();
  }
}
