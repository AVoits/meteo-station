import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {ReservoirComponent} from './reservoir/reservoir.component';
import {MissionComponent} from './mission/mission.component';
import {ProjectsComponent} from './projects/projects.component';
import {PublicationsComponent} from './publications/publications.component';

const routes: Routes = [
  { path: 'history',  component: HistoryComponent },
  { path: 'mission',  component: MissionComponent },
  { path: 'reservoir',  component: ReservoirComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'publications',  component: PublicationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
