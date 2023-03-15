import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachLastComponent } from './beach-last.component';

describe('BeachLastComponent', () => {
  let component: BeachLastComponent;
  let fixture: ComponentFixture<BeachLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
