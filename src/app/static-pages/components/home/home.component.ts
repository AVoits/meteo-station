import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  imageUrls: (string | IImage)[];

  ngOnInit() {
    this.imageUrls = [
      { url: 'https://avoits.github.io/meteo-station/assets/slider/1.jpg', caption: 'The 1 slide' },
      { url: 'https://avoits.github.io/meteo-station/assets/slider/222.jpg', caption: 'The 2 slide'  },
      { url: 'https://avoits.github.io/meteo-station/assets/slider/3.jpg', caption: 'The 3 slide'  },
      { url: 'https://avoits.github.io/meteo-station/assets/slider/4.jpg', caption: 'The 4 slide'  },
      { url: 'https://avoits.github.io/meteo-station/assets/slider/5.jpg', caption: 'The 5 slide'  }
    ];
  }

}
