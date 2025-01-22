import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { Note } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteComponent, NoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public noteList: Note[] = [];
  public selectednote: Note = { title: '', content: '' }

  public addNote(note: Note) {
    if (!this.noteList.includes(note)) {
      this.noteList.push(note);
    }
    this.selectednote = { title: '', content: '' };
  }

  public onNoteSelected(note: Note) {
    this.selectednote = note;
  }
}
