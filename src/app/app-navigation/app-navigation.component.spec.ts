import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppNavigationComponent } from './app-navigation.component';

describe('AppNavigationComponent', () => {
  let component: AppNavigationComponent;
  let fixture: ComponentFixture<AppNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavigationComponent ],
      schemas :[ NO_ERRORS_SCHEMA ]
      //imports:[SearchBarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
