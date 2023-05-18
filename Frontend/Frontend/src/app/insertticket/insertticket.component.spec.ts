import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertticketComponent } from './insertticket.component';

describe('InsertticketComponent', () => {
  let component: InsertticketComponent;
  let fixture: ComponentFixture<InsertticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertticketComponent]
    });
    fixture = TestBed.createComponent(InsertticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
