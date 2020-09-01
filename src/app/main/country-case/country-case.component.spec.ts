import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCaseComponent } from './country-case.component';

describe('CountryCaseComponent', () => {
  let component: CountryCaseComponent;
  let fixture: ComponentFixture<CountryCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
