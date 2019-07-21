import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonListComponent} from './personal-list/person.component';
import {PersonPageComponent} from './person-page/person-page.component';


const personRoutes: Routes = [
  { path: 'personal',  component: PersonListComponent },
  { path: 'person/:id', component: PersonPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(personRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PersonRoutingModule { }
