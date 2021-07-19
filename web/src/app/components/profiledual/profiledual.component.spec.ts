import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledualComponent } from './profiledual.component';

describe('ProfiledualComponent', () => {
  let component: ProfiledualComponent;
  let fixture: ComponentFixture<ProfiledualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
