import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWidgetComponent } from './dynamic-widget.component';

describe('DynamicWidgetComponent', () => {
  let component: DynamicWidgetComponent;
  let fixture: ComponentFixture<DynamicWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
