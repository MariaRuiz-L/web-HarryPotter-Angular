import { Component, inject, OnInit } from '@angular/core';
import { BooksService} from './books-service';
import { IBook} from './books.model';
import { AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books implements OnInit {
  private bookService = inject(BooksService);
  books: IBook[] | undefined;

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res=> {
      this.books = res.data;
    })
  }


}
