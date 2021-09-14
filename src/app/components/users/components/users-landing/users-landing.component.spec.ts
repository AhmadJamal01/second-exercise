import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLandingComponent } from './users-landing.component';

describe('UsersLandingComponent', () => {
  let component: UsersLandingComponent;
  let fixture: ComponentFixture<UsersLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
