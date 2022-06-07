import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSuggestedTopicsComponent } from './navbar-suggested-topics.component';

describe('NavbarSuggestedTopicsComponent', () => {
  let component: NavbarSuggestedTopicsComponent;
  let fixture: ComponentFixture<NavbarSuggestedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSuggestedTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSuggestedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
