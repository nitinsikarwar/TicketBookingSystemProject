import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRegistrationComponent } from './route-registration.component';

describe('RouteRegistrationComponent', () => {
  let component: RouteRegistrationComponent;
  let fixture: ComponentFixture<RouteRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteRegistrationComponent]
    });
    fixture = TestBed.createComponent(RouteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
