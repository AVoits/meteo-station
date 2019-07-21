import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirComponent } from './reservoir.component';

describe('ReservoirComponent', () => {
  let component: ReservoirComponent;
  let fixture: ComponentFixture<ReservoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
