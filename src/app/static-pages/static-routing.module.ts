import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HistoryComponent} from './components/history/history.component';
import {MissionComponent} from './components/mission/mission.component';
import {ReservoirComponent} from './components/reservoir/reservoir.component';

export const staticPagesRoutes: Routes = [
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'reservoir',
    component: ReservoirComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(staticPagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class StaticPagesRoutingModule { }
