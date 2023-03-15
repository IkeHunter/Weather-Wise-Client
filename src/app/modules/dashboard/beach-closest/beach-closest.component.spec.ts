import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachClosestComponent } from './beach-closest.component';

describe('BeachClosestComponent', () => {
  let component: BeachClosestComponent;
  let fixture: ComponentFixture<BeachClosestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachClosestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachClosestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
