import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuggiestDayComponent } from './muggiest-day.component';

describe('MuggiestDayComponent', () => {
  let component: MuggiestDayComponent;
  let fixture: ComponentFixture<MuggiestDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuggiestDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuggiestDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
