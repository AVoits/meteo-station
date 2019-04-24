import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import {PersonService} from '../person.service';
import {IPerson} from '../person';



@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})


export class PersonPageComponent implements OnInit {
  person$: Observable<IPerson>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonService
  ) { }

  ngOnInit() {
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPerson(params.get('id')))
    );
  }

  gotoPersons(pers: IPerson) {
    const personId = pers ? pers.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/personal', { id: personId }]);
  }
}



