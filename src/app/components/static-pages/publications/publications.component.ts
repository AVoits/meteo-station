import { Component, OnInit } from '@angular/core';
import {articles, books, IArticleItem, IArticles} from './data';




@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  articles$: IArticles[];
  books$: IArticleItem[];

  constructor() { }

  ngOnInit() {

    this.articles$ = articles;
    this.books$ = books;
  }

}
