import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMeteoComponent } from './data-meteo.component';

describe('DataMeteoComponent', () => {
  let component: DataMeteoComponent;
  let fixture: ComponentFixture<DataMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
