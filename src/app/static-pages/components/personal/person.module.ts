import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PersonPageComponent} from './person-page/person-page.component';
import {PersonListComponent} from './personal-list/person.component';
import {PersonRoutingModule} from './person-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    PersonRoutingModule,
    MatButtonModule,
  ],
  declarations: [
    PersonListComponent,
    PersonPageComponent
  ]
})


export class PersonModule {}
