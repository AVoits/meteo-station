import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {PERSONS} from './dataPerson';
import {IPerson} from './person';


@Injectable({
  providedIn: 'root',
})

export class PersonService {

  constructor() { }

  getPersons(): Observable<IPerson[]> {
    return of(PERSONS);
  }

  getPerson(id: number | string) {
    return this.getPersons().pipe(
      // (+) before `id` turns the string into a number
      map((persons: IPerson[]) => persons.find(person => person.id === +id))
    );
  }
}
