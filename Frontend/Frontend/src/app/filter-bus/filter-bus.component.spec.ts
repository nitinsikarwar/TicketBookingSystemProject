import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBusComponent } from './filter-bus.component';

describe('FilterBusComponent', () => {
  let component: FilterBusComponent;
  let fixture: ComponentFixture<FilterBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBusComponent]
    });
    fixture = TestBed.createComponent(FilterBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
