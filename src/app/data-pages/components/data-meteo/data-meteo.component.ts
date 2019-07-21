import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';
import dataSet from '../../../../assets/data/discharge/1961.json';


@Component({
  selector: 'app-data-meteo',
  templateUrl: './data-meteo.component.html',
  styleUrls: ['./data-meteo.component.scss']
})
export class DataMeteoComponent implements OnInit {
  public startDate = 1961;
  public endDate = 1991;

  public years = [];

  @ViewChild('chartLine') chartLine: ElementRef;

  constructor() { }

  ngOnInit() {
    this.getYears();
    this.createChart();
  }




  public createChart() {

    const donutCtx = this.chartLine.nativeElement.getContext('2d');

    const output = Object.entries(dataSet).map(([key, value]) => ({key, value}));

    const labelsL = output.map(item => item.key);
    const dataL = output.map(item => item.value.Q_Lusyanka);

    const config = {
      type: 'line',
      data: {
        labels: labelsL,
        datasets: [{
          label: 'расход воды в р.Лусянке в створе д.Черники',
          backgroundColor: '#193089',
          borderColor: '#4eaeee',
          data: dataL,
          fill: true,
        }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    };

    const test = new Chart(donutCtx, config);

  }

  private getYears() {
    for (let i = this.startDate; i <= this.endDate; i++) {
      this.years.push(i);
    }
  }

}
