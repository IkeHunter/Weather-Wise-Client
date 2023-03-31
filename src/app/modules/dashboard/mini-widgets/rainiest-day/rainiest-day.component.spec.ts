import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainiestDayComponent } from './rainiest-day.component';

describe('RainiestDayComponent', () => {
  let component: RainiestDayComponent;
  let fixture: ComponentFixture<RainiestDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainiestDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainiestDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
