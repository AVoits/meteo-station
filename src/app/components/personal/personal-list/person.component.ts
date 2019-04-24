import { Component, OnInit } from '@angular/core';
import {IPerson} from '../person';
import {PERSONS} from '../dataPerson';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../person.service';
import {switchMap} from "rxjs/internal/operators/switchMap";


@Component({
  selector: 'app-staff',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})


export class PersonListComponent implements OnInit {
  persons$: Observable<IPerson[]>;
  selectedId: number;

  constructor(
    private service: PersonService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.persons$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getPersons();
      })
    );
  }
}
