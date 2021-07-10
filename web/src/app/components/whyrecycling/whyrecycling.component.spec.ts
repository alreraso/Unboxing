import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyrecyclingComponent } from './whyrecycling.component';

describe('WhyrecyclingComponent', () => {
  let component: WhyrecyclingComponent;
  let fixture: ComponentFixture<WhyrecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyrecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyrecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
