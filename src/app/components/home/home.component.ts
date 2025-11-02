import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from '../book-search/book-search.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookSearchComponent, BookListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
