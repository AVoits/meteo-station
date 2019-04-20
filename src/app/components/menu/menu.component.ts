import { Component, OnInit } from '@angular/core';

const MenuData: Menu[] = [
  {
    type: 'drop',
    title: 'О станции',
    items: [
      {
        title: 'История',
        linkTo: 'history',
      },
      {
        title: 'Наша миссия',
        linkTo: 'mission',
      },
      {
        title: 'Можайское водохранилище',
        linkTo: 'reservoir',
      },
    ]
  },
  {
    type: 'drop',
    title: 'Сотрудники',
    items: [
      {
        title: 'Научный и технический персонал',
        linkTo: 'personal',
      },
      {
        title: 'Коллеги',
        linkTo: 'colleagues',
      },
      {
        title: 'Партнёры',
        linkTo: 'partners',
      },
    ]
  },
  {
    type: 'drop',
    title: 'Учебная работа',
    items: [
      {
        title: 'Учебные практики',
        linkTo: 'study',
      },
      {
        title: 'Производственная практика',
        linkTo: 'practise',
      },
    ]
  },
  {
    type: 'drop',
    title: 'Научная работа',
    items: [
      {
        title: 'Проекты',
        linkTo: 'study',
      },
      {
        title: 'Публикации',
        linkTo: 'practise',
      },
    ]
  },
  {
    type: 'drop',
    title: 'Материалы',
    items: [
      {
        title: 'Данные',
        linkTo: 'datas',
      },
      {
        title: 'Карты',
        linkTo: 'maps',
      },
      {
        title: 'Полезные материалы',
        linkTo: 'useful',
      },
    ]
  },
  {
    type: 'single',
    title: 'Контакты',
    items: [
      {
        title: 'Контакты',
        linkTo: 'contact',
      }
    ]
  },
];

interface Menu {
  type: string;
  title: string;
  items: Item[];
}

interface Item {
  title: string;
  linkTo: string;

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})

export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
