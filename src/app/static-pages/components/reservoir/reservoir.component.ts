import { Component, OnInit } from '@angular/core';

export interface IReservoir {
  title: string;
  value: string;
}

const RESERVOIR_DATA: IReservoir[] = [
  {
    title: 'Площадь водосбора, км2',
    value: '1360',
  },
  {
    title: 'Нормальный подпорный уровень (НПУ), м БС',
    value: '183',
  },
  {
    title: 'Площадь при НПУ, км2',
    value: '30,7',
  },
  {
    title: 'Длина, км',
    value: '28,0',
  },
  {
    title: 'Длина, км (по руслу р. Москвы) БС',
    value: '48,0',
  },
  {
    title: 'Средняя ширина Bср, км',
    value: '1,1',
  },
  {
    title: 'Максимальная ширина, км',
    value: '2,6',
  },
  {
    title: 'Средняя глубина Hср, м',
    value: '7,7',
  },
  {
    title: 'Максимальная глубина, м',
    value: '22,6',
  },
  {
    title: 'Объем при НПУ, млн м3',
    value: '235,0',
  },

];

@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.scss']
})
export class ReservoirComponent implements OnInit {

  dataSource: IReservoir[];

  constructor() { }

  ngOnInit() {
    this.dataSource = RESERVOIR_DATA;
  }

}
