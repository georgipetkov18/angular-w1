import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Book = { title: string, description: string, author: string, rating: number | null, ratingsCount: number };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public books: Book[] = [
    {
      title: 'Под игото',
      description: '„Под игото“ е роман в три части от българския писател Иван Вазов, цялостно публикуван за първи път през 1894 г.',
      author: 'Иван Вазов',
      rating: null,
      ratingsCount: 0,
    },
    {
      title: 'Немили-недраги',
      description: '„Немили-недраги“ (1883 – 1884) е повест от Иван Вазов и е един от ранните примери на модерна българска литература.',
      author: 'Иван Вазов',
      rating: null,
      ratingsCount: 0,
    },
    {
      title: 'Железният светилник',
      description: '„Железният светилник“ е исторически роман и първата книга от известната тетралогия на Димитър Талев („Железният светилник“, „Преспанските камбани“, „Илинден“ и „Гласовете ви чувам“).',
      author: 'Димитър Талев',
      rating: null,
      ratingsCount: 0,
    },
    {
      title: 'Тютюн',
      description: '„Тютюн“ е най-известният роман на Димитър Димов и един от най-четените романи в българската литература.',
      author: 'Димитър Димов',
      rating: null,
      ratingsCount: 0,
    },
    {
      title: 'Ян Бибиян',
      description: 'Ян Бибиян е първият български фантастичен роман за деца от българския писател Елин Пелин.',
      author: 'Елин Пелин',
      rating: null,
      ratingsCount: 0,
    },
    {
      title: 'По жицата',
      description: '„По жицата“ е една от представителните за Йовковото творчество творби.',
      author: 'Йордан Йовков',
      rating: null,
      ratingsCount: 0,
    },
  ]

  public index: number = 0;
  private lastRatingBtn: HTMLButtonElement | null = null;

  displayNextBook() {
    this.index === this.books.length - 1 ? this.index = 0 : this.index++;
    this.lastRatingBtn = null;
  }

  rateBook(e: Event) {
    const btn = e.target as HTMLButtonElement;
    debugger
    let currentBook = this.books[this.index];
    if (this.lastRatingBtn) {
      this.lastRatingBtn.classList.remove('rating-choice', 'chosen');
      if (currentBook.ratingsCount === 1) {
        currentBook.rating = null;
      }
      else {
        const actualResult = (currentBook.rating! * currentBook.ratingsCount - +this.lastRatingBtn.textContent!) / (currentBook.ratingsCount - 1);
        const roundedResult = Math.round(actualResult * 100) / 100;
        currentBook.rating = roundedResult;
      }
      currentBook.ratingsCount--;
    }


    if (currentBook.rating === null) {
      currentBook.rating = +btn.textContent!
    }
    else {
      const actualResult = (currentBook.rating * currentBook.ratingsCount + +btn.textContent!) / (currentBook.ratingsCount + 1);
      const roundedResult = Math.round(actualResult * 100) / 100;
      currentBook.rating = roundedResult;
    }

    btn.classList.add('rating-choice', 'chosen');
    currentBook.ratingsCount++;
    this.lastRatingBtn = btn;
  }
}
