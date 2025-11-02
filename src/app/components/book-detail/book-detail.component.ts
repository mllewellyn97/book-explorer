import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
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
  constructor(
    private route: ActivatedRoute,
    private bookService: BookServiceService
  ) { }

  ngOnInit(): void {
    console.log("On init");
    this.book$ = this.route.params.pipe(
      switchMap(params => {
        const workId = params['workId'];
        console.log("On init book detail");
        console.log(workId);
        return this.bookService.getBookDetail(workId);
      })
    );
  }
}
