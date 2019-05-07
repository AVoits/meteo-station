import {Component, OnInit} from '@angular/core';
import {Lightbox} from 'ngx-lightbox';


interface IImage {
  src: string;
  caption: string;
  thumb: string;

}


const photoHistory = [
  {
    caption: 'Студенты-географы на утренней зарядке (Красновидово, конец 1960-х годов)',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-01-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-01.jpg',
  },
  {
    caption: 'Гидрологическая практика на Москва-реке (1960 г.)',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-02-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-02.jpg',
  },
  {
    caption: 'В.Д. Быков',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-03-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-03.jpg',
  },

  {
    caption: 'Р.К. Клиге',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-04-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-04.jpg',
  },
  {
    caption: 'Практика в  Красновидово в 1976–1977 гг.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-05-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-05.jpg',
  },
  {
    caption: 'Практика в  Красновидово в 1976–1977 гг.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-06-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-06.jpg',
  },
  {
    caption: 'Лаборатория в 2005 г.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-07-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-07.jpg',
  },
  {
    caption: 'Лаборатория в 2005 г.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-08-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-08.jpg',
  },
  {
    caption: 'Лаборатория в 2005 г.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-09-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-09.jpg',
  },
  {
    caption: '… и в  2015 г.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-10-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-10.jpg',
  },
  {
    caption: 'Начальник учебно-научной базы В.В. Пуклаков и ее научный руководитель К.К. Эдельштейн',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-11-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-11.jpg',
  },
  {
    caption: 'К юбилею силами сотрудников лаборатории организован музей гидрометеоролического оборудования',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-12-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-12.jpg',
  },
  {
    caption: 'Посвящение в гидрологи в 2014 г. В центре Н.И. Алексеевский',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-13-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-13.jpg',
  },
  {
    caption: 'На берегу Можайского водохранилища. Посвящение в гидрологи в сентябре 2015 г.',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-14-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-14.jpg',
  },
  {
    caption: 'На торжественном заседании, посвященном юбилею лаборатории (октябрь 2015 г.)',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-15-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-15.jpg',
  },
  {
    caption: 'Сотрудники лаборатории всех времен (октябрь 2015 г.)',
    src: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-16-1000.jpg',
    thumb: 'https://dammitmoonmoon.github.io/krasnovidovo-station/img/history/history-16.jpg',
  },
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {

  album$: IImage[];
  albumTitles$: string[];

  constructor(private lightbox: Lightbox) {
  }

  open(index: number): void {
    this.lightbox.open(this.album$, index);
  }

  close(): void {
    this.lightbox.close();
  }

  ngOnInit() {
    this.album$ = photoHistory;

    this.albumTitles$ = photoHistory.map(item => {
      return item.caption;
    });
  }
}
