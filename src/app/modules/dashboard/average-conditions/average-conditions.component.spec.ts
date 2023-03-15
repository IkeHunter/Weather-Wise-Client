import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageConditionsComponent } from './average-conditions.component';

describe('AverageConditionsComponent', () => {
  let component: AverageConditionsComponent;
  let fixture: ComponentFixture<AverageConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
