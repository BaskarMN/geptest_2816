import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen213399Component } from './screen213399.component';

describe('Screen213399Component', () => {
  let component: Screen213399Component;
  let fixture: ComponentFixture<Screen213399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen213399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen213399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});