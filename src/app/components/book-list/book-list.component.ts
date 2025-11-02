import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookServiceService } from 'src/app/services/book-service.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: any[] = [];
  loading: boolean = false;
  private subs: Subscription = new Subscription;

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.subs.add(this.bookService.books$.subscribe(books => this.books = books));
    this.subs.add(this.bookService.loading$.subscribe(isLoading => this.loading = isLoading));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
