import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-meteo',
  templateUrl: './data-meteo.component.html',
  styleUrls: ['./data-meteo.component.scss']
})
export class DataMeteoComponent implements OnInit {
  public startDate = 1961;
  public endDate = 1991;

  public years = [];

  constructor() { }

  ngOnInit() {
    for (let i = this.startDate; i <= this.endDate; i++) {
      this.years.push(i);
    }
  }
}
