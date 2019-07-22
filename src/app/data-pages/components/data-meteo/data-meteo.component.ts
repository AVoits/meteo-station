import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';
import dataSet from '../../../../assets/data/discharge/1961.json';
import {DataStoreService} from "../../data-store.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-data-meteo',
  templateUrl: './data-meteo.component.html',
  styleUrls: ['./data-meteo.component.scss']
})
export class DataMeteoComponent implements OnInit {

  public dataForm: FormGroup;

  public yearsForm = [];
  public riversForm = ['р. Лусянка', 'р. Москва'];

  @ViewChild('chartLine') chartLine: ElementRef;

  constructor(private data: DataStoreService) { }

  ngOnInit() {
    this.initialForm();

    this.getDataForFormInputs();

  }

  private initialForm(): void {
    this.dataForm = new FormGroup({
      years: new FormControl(),
      rivers: new FormControl(),
    });
  }

  private getDataForFormInputs() {
    const startEndDAte = this.data.getStartEndDates('discharge');

    for (let i = startEndDAte.start; i <= startEndDAte.end; i++) {
      this.yearsForm.push(i);
    }
  }



  public createChart() {

    const donutCtx = this.chartLine.nativeElement.getContext('2d');

    const output = Object.entries(dataSet).map(([key, value]) => ({key, value}));

    const labelsL = output.map(item => item.key);
    const dataL = output.map(item => item.value.Q_Lusyanka);
    const dataM = output.map(item => item.value.Q_Moskva);

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
        }, {
          label: 'расход воды в р.Москве в створе д.Барсуки',
          backgroundColor: '#8af2ff',
          borderColor: '#1caab1',
          data: dataM,
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
            type: 'time',
            time: {
              displayFormats: {
                quarter: 'MMM YYYY'
              }
            }
          }],
          yAxes: [{
            ticks: {
              suggestedMin: 50,
              suggestedMax: 100,
            }
          }]
        }
      }
    };

    const test = new Chart(donutCtx, config);

  }


}
