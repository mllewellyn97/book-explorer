import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private booksSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private hasSearchedSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  hasSearched$ = this.hasSearchedSubject.asObservable();
  books$ = this.booksSubject.asObservable();
  constructor(private http: HttpClient) { }

  searchBooks(title: string, author?: string, subject?: string): void {
    const titleQuery = title.trim();
    const authorQuery = author?.trim();
    const subjectQuery = subject?.trim();

    if (!titleQuery && !authorQuery && !subjectQuery) {
      this.booksSubject.next([]);
      return;
    }

    this.loadingSubject.next(true);
    this.hasSearchedSubject.next(true); //mark that it's searched
    const baseUrl = "https://openlibrary.org/search.json?";
    const params = [];

    if (titleQuery) params.push(`title=${encodeURIComponent(titleQuery)}`);
    if (authorQuery) params.push(`author=${encodeURIComponent(authorQuery)}`);
    if (subjectQuery) params.push(`subject=${encodeURIComponent(subjectQuery)}`);

    const url = baseUrl + params.join('&');

    this.http.get<any>(url).pipe(
      map(res => res.docs.slice(0, 20))
    ).subscribe({
      next: books => {
        this.booksSubject.next(books);
        this.loadingSubject.next(false);
      },
      error: err => {
        console.error('Search error', err);
        this.booksSubject.next([]);
        this.loadingSubject.next(false);
      }
    });
  }

  getBookDetail(workId: string): Observable<any> {
    console.log(workId);
    if (!workId) return new Observable(observer => observer.next(null));

    const url = `https://openlibrary.org/works/${workId}.json`;
    return this.http.get(url);
  }
  clearBooks() {
    this.booksSubject.next([]);
    this.hasSearchedSubject.next(false);  //restore before search state
  }
}
