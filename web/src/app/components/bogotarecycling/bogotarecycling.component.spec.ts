import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BogotarecyclingComponent } from './bogotarecycling.component';

describe('BogotarecyclingComponent', () => {
  let component: BogotarecyclingComponent;
  let fixture: ComponentFixture<BogotarecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BogotarecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BogotarecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
