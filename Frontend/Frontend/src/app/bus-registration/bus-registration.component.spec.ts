import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRegistrationComponent } from './bus-registration.component';

describe('BusRegistrationComponent', () => {
  let component: BusRegistrationComponent;
  let fixture: ComponentFixture<BusRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusRegistrationComponent]
    });
    fixture = TestBed.createComponent(BusRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
