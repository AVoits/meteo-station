import { Component, OnInit } from '@angular/core';
import {heatMapCommon} from './d3';

// @ts-ignore
import DataRB5 from '../../../assets/data/queryResult.json';



@Component({
  selector: 'app-data-meteo',
  templateUrl: './data-meteo.component.html',
  styleUrls: ['./data-meteo.component.scss']
})

export class DataMeteoComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    heatMapCommon(DataRB5);
  }


}
