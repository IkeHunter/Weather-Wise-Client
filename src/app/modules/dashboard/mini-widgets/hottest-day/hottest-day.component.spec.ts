import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottestDayComponent } from './hottest-day.component';

describe('HottestDayComponent', () => {
  let component: HottestDayComponent;
  let fixture: ComponentFixture<HottestDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottestDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HottestDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
