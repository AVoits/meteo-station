import { NgModule } from '@angular/core';
import {DataMeteoComponent} from './components/data-meteo/data-meteo.component';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatButtonToggleModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";


const components = [
  DataMeteoComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    MatSelectModule, CommonModule, MatButtonToggleModule, MatButtonModule, ReactiveFormsModule
  ]
})
export class DataPagesModule { }
