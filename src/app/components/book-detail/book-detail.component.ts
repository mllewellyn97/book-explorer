import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<any> | undefined;
  /**For loading skeletons */
  imageLoaded: boolean = false;
  bookLoaded: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookServiceService
  ) { }

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap(params => {
        const workId = params['workId'];
        this.bookLoaded = false;
        this.imageLoaded = false;
        return this.bookService.getBookDetail(workId);
      }),
      tap(() => {
        this.bookLoaded = true;
      })
    );
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}
