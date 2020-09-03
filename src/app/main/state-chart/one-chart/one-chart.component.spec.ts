import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneChartComponent } from './one-chart.component';

describe('OneChartComponent', () => {
  let component: OneChartComponent;
  let fixture: ComponentFixture<OneChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
