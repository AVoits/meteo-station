import { Component, OnInit } from '@angular/core';

import * as data from './data';

interface IProject {
  theme: string;
  participants: string;
  notes: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  grants$: IProject[];
  activeProjects: IProject[];
  contracts$: IProject[];

  constructor() { }

  ngOnInit() {
    this.activeProjects = data.activeProjects;
    this.contracts$ = data.contracts;
    this.grants$ = data.grants;
  }

}
