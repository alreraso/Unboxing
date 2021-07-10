import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatrecyclingComponent } from './whatrecycling.component';

describe('WhatrecyclingComponent', () => {
  let component: WhatrecyclingComponent;
  let fixture: ComponentFixture<WhatrecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatrecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatrecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
