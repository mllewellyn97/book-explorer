import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: any;

  get coverUrl(): string | null {
  if (this.book.isbn && this.book.isbn.length > 0) {
    return `https://covers.openlibrary.org/b/isbn/${this.book.isbn[0]}-M.jpg`;
  } else if (this.book.cover_edition_key) {
    return `https://covers.openlibrary.org/b/olid/${this.book.cover_edition_key}-M.jpg`;
  }
  return null;
}
}
