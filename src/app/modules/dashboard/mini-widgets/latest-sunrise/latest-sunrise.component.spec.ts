import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSunriseComponent } from './latest-sunrise.component';

describe('LatestSunriseComponent', () => {
  let component: LatestSunriseComponent;
  let fixture: ComponentFixture<LatestSunriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestSunriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestSunriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
