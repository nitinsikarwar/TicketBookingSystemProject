import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBusesComponent } from './show-buses.component';

describe('ShowBusesComponent', () => {
  let component: ShowBusesComponent;
  let fixture: ComponentFixture<ShowBusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBusesComponent]
    });
    fixture = TestBed.createComponent(ShowBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
