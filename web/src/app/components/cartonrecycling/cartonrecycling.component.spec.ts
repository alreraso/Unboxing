import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartonrecyclingComponent } from './cartonrecycling.component';

describe('CartonrecyclingComponent', () => {
  let component: CartonrecyclingComponent;
  let fixture: ComponentFixture<CartonrecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartonrecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartonrecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
