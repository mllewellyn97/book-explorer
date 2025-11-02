import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from 'src/app/services/book-service.service';
@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, FormsModule],
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  showFilters = false;
  titleQuery: string = '';
  authorQuery: string = '';
  subjectQuery: string= '';

  constructor(private bookService: BookServiceService) {

  }

  /**
   * Handle the search by calling book service
   */
  searchByTitle() {
    this.bookService.searchBooks(this.titleQuery, this.authorQuery, this.subjectQuery);
  }
  
  /**
   * On clicking the ellipsis menu icon, show or hide the additional filters
   */
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  clearQueries() {
    this.titleQuery = '';
    this.authorQuery = '';
    this.subjectQuery = '';
    this.bookService.clearBooks();
  }
}
