import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusesComponent } from './admin-buses.component';

describe('AdminBusesComponent', () => {
  let component: AdminBusesComponent;
  let fixture: ComponentFixture<AdminBusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBusesComponent]
    });
    fixture = TestBed.createComponent(AdminBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
