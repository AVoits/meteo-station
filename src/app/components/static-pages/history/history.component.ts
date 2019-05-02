import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';


interface IImage {
  src: string;
  caption: string;
  thumb: string;

}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {

  album$: IImage[] = [];

  constructor(private lightbox: Lightbox) {}

  open(index: number): void {
    this.lightbox.open(this.album$, index);
  }

  close(): void {
    this.lightbox.close();
  }

  ngOnInit() {
    for (let i = 1; i <= 4; i++) {
      const src = 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-01-1000.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-01.jpg';

      const image = {
        src,
        caption,
        thumb
      };

      this.album$.push(image);
    }
  }

}
