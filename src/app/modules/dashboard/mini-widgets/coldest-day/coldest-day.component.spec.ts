import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdestDayComponent } from './coldest-day.component';

describe('ColdestDayComponent', () => {
  let component: ColdestDayComponent;
  let fixture: ComponentFixture<ColdestDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdestDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdestDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
