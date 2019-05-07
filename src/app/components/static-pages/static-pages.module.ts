import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import {HistoryComponent} from './history/history.component';
import {MissionComponent} from './mission/mission.component';
import {ReservoirComponent} from './reservoir/reservoir.component';
import {MatExpansionModule, MatIconModule, MatTableModule, MatTabsModule} from "@angular/material";
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
  declarations: [
    HistoryComponent,
    MissionComponent,
    ReservoirComponent,
    ProjectsComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class StaticPagesModule { }
