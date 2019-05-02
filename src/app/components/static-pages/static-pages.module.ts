import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import {HistoryComponent} from './history/history.component';
import {MissionComponent} from './mission/mission.component';
import {ReservoirComponent} from './reservoir/reservoir.component';

@NgModule({
  declarations: [
    HistoryComponent,
    MissionComponent,
    ReservoirComponent
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
