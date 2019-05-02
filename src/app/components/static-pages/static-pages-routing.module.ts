import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {ReservoirComponent} from './reservoir/reservoir.component';
import {MissionComponent} from './mission/mission.component';

const routes: Routes = [
  { path: 'history',  component: HistoryComponent },
  { path: 'mission',  component: MissionComponent },
  { path: 'reservoir',  component: ReservoirComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
