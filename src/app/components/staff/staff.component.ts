import { Component, OnInit } from '@angular/core';
import {Staff, staffData} from './dataStaff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})

export class StaffComponent implements OnInit {
  public staffList: Staff[];
  staff: Staff;

  constructor() { }

  ngOnInit() {
    this.staffList = staffData;
  }

}
