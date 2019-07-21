import { NgModule } from '@angular/core';
import {MissionComponent} from './components/mission/mission.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {HistoryComponent} from './components/history/history.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PublicationsComponent} from './components/publications/publications.component';
import {ReservoirComponent} from './components/reservoir/reservoir.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {RouterModule} from "@angular/router";
import {MatExpansionModule, MatIconModule, MatTabsModule} from "@angular/material";
import {CommonModule} from '@angular/common';

const components = [
  MissionComponent,
  AboutComponent,
  HistoryComponent,
  HomeComponent,
  ProjectsComponent,
  PublicationsComponent,
  ReservoirComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    SlideshowModule,
    RouterModule,
    MatTabsModule,
    MatExpansionModule,
    CommonModule,
    MatIconModule
  ]
})
export class StaticPagesModule { }
